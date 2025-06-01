/* eslint-disable @typescript-eslint/no-explicit-any */
import { Lease, Property } from '@/models';
import { PropertyFormType } from '../schemas/property';
import { apiResponse } from '@/utils/apiResponse';
import { connectDb } from '@/db_connect/dbConnect';
import { Location } from '@/models';
import { GetPropertiesType, Pagination, TLocation } from '@/lib/types';
import { getCoordinatesFromLocation } from '@/utils';
import prisma from '../prisma';

connectDb();

export const createProperty = async (data: PropertyFormType) => {
  const newProperty = await Property.create(data);
  return apiResponse({
    success: true,
    message: 'Property is created successfully',
    status: 201,
    data: newProperty,
  });
};
export const updateProperty = async (
  data: PropertyFormType,
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

export const getPropertiesLocation = async ({
  polygon,
  page = 1,
  limit = 10,
}: {
  polygon: string;
  page?: number;
  limit?: number;
}) => {
  if (!polygon) {
    throw new Error('Polygon is required');
  }

  const [southWestLat, southWestLng, northEastLat, northEastLng] = polygon
    .split(',')
    .map((coord) => parseFloat(coord));

  if ([southWestLat, southWestLng, northEastLat, northEastLng].some(isNaN)) {
    throw new Error('Invalid polygon coordinates');
  }

  const polygonCoordinates = [
    [
      [southWestLng, southWestLat],
      [northEastLng, southWestLat],
      [northEastLng, northEastLat],
      [southWestLng, northEastLat],
      [southWestLng, southWestLat], // Close the polygon
    ],
  ];

  const matchStage = {
    location: {
      $geoWithin: {
        $geometry: {
          type: 'Polygon',
          coordinates: polygonCoordinates,
        },
      },
    },
  };

  // Get total count
  const totalItems = await Location.countDocuments(matchStage);
  const totalPages = Math.ceil(totalItems / limit);

  // Paginated result
  const results = await Location.aggregate([
    { $match: matchStage },
    { $project: { _id: 1 } },
    { $skip: (page - 1) * limit },
    { $limit: limit },
  ]);

  const locationIds = results.map((item) => item._id.toString());
  const pagination: Pagination = {
    totalPages,
    totalItems,
    currentPage: page,
  };
  return {
    locationIds,
    pagination,
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
  limit = '3',
  page = '1',
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
}): Promise<GetPropertiesType> => {
  const parsedLimit = Number(limit) || 3;
  const parsedPage = Number(page) || 1;

  const skips = (parsedPage - 1) * parsedLimit;

  const filters: any = {
    isAvailable: true,
  };

  if (priceMin || priceMax) {
    filters.pricePerMonth = {};
    if (priceMin) filters.pricePerMonth.gte = Number(priceMin);
    if (priceMax) filters.pricePerMonth.lte = Number(priceMax);
  }

  if (squareFeetMin || squareFeetMax) {
    filters.squareFeet = {};
    if (squareFeetMin) filters.squareFeet.gte = Number(squareFeetMin);
    if (squareFeetMax) filters.squareFeet.lte = Number(squareFeetMax);
  }

  if (baths) filters.baths = Number(baths);
  if (beds) filters.beds = Number(beds);
  if (userId) filters.ownerId = userId;

  if (propertyType && propertyType.length > 0) {
    filters.propertyType = { in: propertyType };
  }
  const where: any = {
    ...filters,
    amenities:
      amenities && amenities.length > 0
        ? {
            some: {
              name: { in: amenities },
            },
          }
        : undefined,
  };

  const [properties, totalCount] = await Promise.all([
    prisma.property.findMany({
      where,
      skip: skips,
      take: parsedLimit,
      include: {
        photoUrls: {
          select: {
            url: true,
          },
        },
        amenities: {
          select: {
            name: true,
          },
        },
        highLights: {
          select: {
            name: true,
          },
        },
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    }),
    prisma.property.count({ where }),
  ]);
  const formatedProperties = properties.map((property) => ({
    ...property,
    amenities: property.amenities.map((item) => item.name),
    highLights: property.highLights.map((item) => item.name),
    photoUrls: property.photoUrls.map((item) => item.url),
  }));

  const totalPages = Math.ceil(totalCount / parsedLimit);
  const pagination: Pagination = {
    totalPages,
    currentPage: Number(page),
    totalItems: totalCount,
  };

  return {
    properties: formatedProperties,
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

export const getSingleProperty = async (propertyId: string) => {
  const [property, location] = await Promise.all([
    await prisma.property.findUnique({
      where: {
        id: propertyId,
      },
      include: {
        photoUrls: {
          select: {
            url: true,
          },
        },
        amenities: {
          select: {
            name: true,
          },
        },
        highLights: {
          select: {
            name: true,
          },
        },
        owner: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phoneNumber: true,
          },
        },
      },
    }),
    await Location.findOne({ propertyId: propertyId }),
  ]);

  const _location: TLocation = {
    city: location.city,
    country: location.country,
    state: location?.state,
    coordinates: location.location.coordinates as [number, number],
  };
  const formatedProperty = {
    ...property,
    amenities: property?.amenities.map((item) => item.name),
    highLights: property?.highLights.map((item) => item.name),
    photoUrls: property?.photoUrls.map((item) => item.url),
    propertyLocation: _location,
  };

  return formatedProperty;
};

export const deletePropertyById = async (propertyId: string) => {
  const result = await Property.findByIdAndDelete(propertyId);
  if (!result) {
    throw new Error(`Property with id ${propertyId}  not found`);
  }
  await Location.deleteOne({ _id: result.locationId });
};

export const getFavouriteProperties = async ({
  userId,
  page = 1,
  limit = 6,
}: {
  userId: string;
  page?: number;
  limit?: number;
}): Promise<GetPropertiesType> => {
  const skip = (page - 1) * limit;

  const properties = await prisma.favouriteProperty.findMany({
    where: {
      userId: userId,
    },
    include: {
      property: {
        include: {
          photoUrls: {
            select: {
              url: true,
            },
          },
          highLights: {
            select: { name: true },
          },
          amenities: {
            select: { name: true },
          },
          owner: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              phoneNumber: true,
            },
          },
        },
      },
    },
    skip: skip,
    take: limit,
  });
  const formatedProperties = properties.map(({ property }) => ({
    ...property,
    amenities: property.amenities.map((item) => item.name),
    highLights: property.highLights.map((item) => item.name),
    photoUrls: property.photoUrls.map((item) => item.url),
  }));
  const totalCount = await prisma.favouriteProperty.count({
    where: { userId },
  });
  const totalPages = Math.ceil(totalCount / limit);
  const pagination: Pagination = {
    totalItems: totalCount,
    currentPage: page,
    totalPages: totalPages,
  };
  return {
    properties: formatedProperties,
    pagination,
  };
};

export const getListOfRentedPropertyId = async ({
  userId,
}: {
  userId: string;
}) => {
  try {
    const leases = await Lease.find({ tenantId: userId })
      .select('propertyId')
      .lean();

    return leases.map((lease) => lease.propertyId.toString());
  } catch (error: any) {
    throw new Error(error.message);
  }
};
