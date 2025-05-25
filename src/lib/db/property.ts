import { FavouriteProperty, Lease, Property } from '@/models';
import { PropertyType } from '../schemas/property';
import { apiResponse } from '@/utils/apiResponse';
import { connectDb } from '@/db_connect/dbConnect';
import { Location } from '@/models';
import { Pagination, SingleProperTy } from '@/lib/types';
import mongoose from 'mongoose';
import { getCoordinatesFromLocation } from '@/utils';

connectDb();

export const createProperty = async (data: PropertyType) => {
  const newProperty = await Property.create(data);
  return apiResponse({
    success: true,
    message: 'Property is created successfully',
    status: 201,
    data: newProperty,
  });
};
export const updateProperty = async (
  data: PropertyType,
  propertyId: string
) => {
  const updatedProperty = await Property.findByIdAndUpdate(
    propertyId,
    { $set: data.property },
    { new: true }
  );
  if (!updatedProperty) {
    throw new Error('Property not found');
  }
  const { property, location } = data;
  const { lng, lat } = await getCoordinatesFromLocation(location);
  const locationData = await Location.findById(updatedProperty.locationId);
  if (!locationData) {
    throw new Error('Location data is not found');
  }
  locationData.address = location.address;
  locationData.city = location.city;
  locationData.country = location.country;
  locationData.state = location.state;
  locationData.location.coordinates = [lng, lat];
  await locationData.save();
  return {
    property,
    location,
  };
};
export const getProperties = async ({
  priceMin,
  priceMax,
  baths,
  beds,
  propertyType,
  squareFeetMin,
  squareFeetMax,
  amenities,
  latitude,
  longitude,
  limit = '3',
  page = '1',
  city,
  country,
  polygon,
  userId,
}: {
  priceMin?: string;
  priceMax?: string;
  baths?: string;
  beds?: string;
  propertyType?: string[];
  squareFeetMin?: string;
  squareFeetMax?: string;
  amenities?: string[];
  latitude?: string;
  longitude?: string;
  limit?: string;
  page?: string;
  city?: string;
  country?: string;
  polygon?: string;
  userId?: string;
}) => {
  const parsedLimit = Number(limit) || 3;
  const parsedPage = Number(page) || 1;

  const skips = (parsedPage - 1) * parsedLimit;

  let polygonCoordinates;
  if (polygon) {
    const [southWestLat, southWestLng, northEastLat, northEastLng] = polygon
      .split(',')
      .map((coord) => parseFloat(coord));
    if ([southWestLat, southWestLng, northEastLat, northEastLng].some(isNaN)) {
      throw new Error('Invalid polygon coordinates');
    }
    polygonCoordinates = [
      [
        [southWestLng, southWestLat],
        [northEastLng, southWestLat],
        [northEastLng, northEastLat],
        [southWestLng, northEastLat],
        [southWestLng, southWestLat], // Close the polygon with the first point
      ],
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {};
  if (city) {
    query['location.city'] = { $regex: city, $options: 'i' };
  }
  if (country) {
    query['location.country'] = { $regex: country, $options: 'i' };
  }
  if (priceMin || priceMax) {
    query['property.pricePerMonth'] = {};
    if (priceMin) query['property.pricePerMonth'].$gte = Number(priceMin);
    if (priceMax) query['property.pricePerMonth'].$lte = Number(priceMax);
  }

  if (squareFeetMin || squareFeetMax) {
    query['property.squareFeet'] = {};
    if (squareFeetMin)
      query['property.squareFeet'].$gte = Number(squareFeetMin);
    if (squareFeetMax)
      query['property.squareFeet'].$lte = Number(squareFeetMax);
  }

  if (baths) {
    query['property.baths'] = Number(baths);
  }
  if (beds) {
    query['property.beds'] = Number(beds);
  }
  if (userId) {
    query['property.ownerId'] = new mongoose.Types.ObjectId(userId);
  }
  if (propertyType && propertyType.length > 0) {
    query['property.propertyType'] = { $in: propertyType };
  }

  if (amenities && amenities.length > 0) {
    query['property.amenities'] = { $all: amenities };
  }

  const lookupStage = {
    $lookup: {
      from: 'properties',
      localField: 'propertyId',
      foreignField: '_id',
      as: 'property',
    },
  };
  const addFieldStage = {
    $addFields: {
      property: { $first: '$property' },
      'location.coordinates': '$location.coordinates',
      'location.city': '$city',
      'location.address': '$address',
      'location.country': '$country',
      'location.state': '$state',
    },
  };

  const queryStage = {
    $match: query,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pipeline: any = [
    lookupStage,
    addFieldStage,
    {
      $project: {
        property: 1,
        location: 1,
        _id: 0,
      },
    },
    queryStage,
    {
      $skip: skips,
    },
    {
      $limit: parsedLimit,
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const countPipeline: any = [lookupStage, addFieldStage, queryStage];

  if (longitude && latitude) {
    const geoLocationStage = {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [parseFloat(longitude), parseFloat(latitude)],
        },
        distanceField: 'distance',
        spherical: true,
        maxDistance: 10000, // 10km
      },
    };
    pipeline.unshift(geoLocationStage);
    countPipeline.unshift(geoLocationStage);
  }
  if (!city && !country && polygon) {
    const geoWithin = {
      $match: {
        location: {
          $geoWithin: {
            $geometry: {
              type: 'Polygon',
              coordinates: polygonCoordinates,
            },
          },
        },
      },
    };
    pipeline.unshift(geoWithin);
    countPipeline.unshift(geoWithin);
  }

  const properties = await Location.aggregate(pipeline);
  const countResult = await Location.aggregate([
    ...countPipeline,
    { $count: 'total' },
  ]);
  const total = countResult[0]?.total || 0;
  const totalPages = Math.ceil(total / Number(limit));

  const pagination: Pagination = {
    totalItems: total,
    totalPages,
    currentPage: Number(page),
  };
  return {
    properties: JSON.parse(JSON.stringify(properties)),
    pagination,
  };
};

export const getPropertiesWithinMapBounds = async (
  searchParams: URLSearchParams
) => {
  const polygon = searchParams.get('polygon');

  let polygonCoordinates;
  if (polygon) {
    const [southWestLat, southWestLng, northEastLat, northEastLng] = polygon
      .split(',')
      .map((coord) => parseFloat(coord));
    if ([southWestLat, southWestLng, northEastLat, northEastLng].some(isNaN)) {
      throw new Error('Invalid polygon coordinates');
    }
    polygonCoordinates = [
      [
        [southWestLng, southWestLat],
        [northEastLng, southWestLat],
        [northEastLng, northEastLat],
        [southWestLng, northEastLat],
        [southWestLng, southWestLat], // Close the polygon with the first point
      ],
    ];
  }

  const properties = await Location.aggregate([
    {
      $match: {
        location: {
          $geoWithin: {
            $geometry: {
              type: 'Polygon',
              coordinates: polygonCoordinates,
            },
          },
        },
      },
    },
    {
      $lookup: {
        from: 'properties',
        localField: 'propertyId',
        foreignField: '_id',
        as: 'property',
      },
    },
    {
      $addFields: {
        property: { $first: '$property' },
        coordinates: '$location.coordinates',
      },
    },
    {
      $project: {
        coordinates: 1,
        'property._id': 1,
        'property.name': 1,
        'property.pricePerMonth': 1,
        city: 1,
        country: 1,
      },
    },
  ]);
  return properties;
};

export const getSingleProperty = async (
  propertyId: string
): Promise<SingleProperTy> => {
  const property: any = await Property.findById(propertyId).populate(
    'locationId'
  );
  if (!property) {
    throw new Error('Propert not found');
  }
  const propertyObj = property.toObject();

  const location = {
    coordinates: propertyObj.locationId.location.coordinates,
    city: propertyObj.locationId.city,
    country: propertyObj.locationId.country,
    state: propertyObj.locationId.state,
    address: propertyObj.locationId.address,
  };
  delete propertyObj.locationId;
  const newProperty = {
    property: propertyObj,
    location: location,
  };

  return JSON.parse(JSON.stringify(newProperty));
};

export const deletePropertyById = async (propertyId: string) => {
  const reuslt = await Property.findByIdAndDelete(propertyId);
  await Location.deleteOne({ _id: reuslt.locationId });
};

export const getFavouriteProperties = async ({
  userId,
  page = 1,
  limit = 6,
}: {
  userId: string;
  page?: number;
  limit?: number;
}) => {
  const skip = (page - 1) * limit;

  const properties = await FavouriteProperty.aggregate([
    {
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: 'properties',
        localField: 'propertyId',
        foreignField: '_id',
        as: 'property',
      },
    },
    {
      $addFields: {
        property: { $first: '$property' },
      },
    },
    {
      $lookup: {
        from: 'locations',
        localField: 'property.locationId',
        foreignField: '_id',
        as: 'locationData',
      },
    },
    {
      $addFields: {
        locationData: { $first: '$locationData' },
      },
    },

    {
      $addFields: {
        location: {
          coordinates: '$locationData.location.coordinates',
          city: '$locationData.city',
          country: '$locationData.country',
          address: '$locationData.address',
          state: '$locationData.state',
        },
      },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },

    {
      $project: {
        locationData: 0,
        propertyId: 0,
        userId: 0,
        _id: 0,
        __v: 0,
      },
    },
  ]);
  const totalCount = await FavouriteProperty.countDocuments({
    userId: userId,
  });
  const totalPages = Math.ceil(totalCount / limit);
  const pagination: Pagination = {
    totalItems: totalCount,
    currentPage: page,
    totalPages: totalPages,
  };
  return {
    properties: JSON.parse(JSON.stringify(properties)),
    pagination,
  };
};

export const getListOfRentedPropertyId = async ({
  userId,
}: {
  userId: string;
}) => {
  try {
    const leases = await Lease.find({ isActive: true, tenantId: userId })
      .select('propertyId')
      .lean();

    return leases.map((lease) => lease.propertyId.toString());
  } catch (error) {
    throw new Error(error.message);
  }
};
