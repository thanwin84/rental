import { Property } from '@/models';
import { PropertyType } from '../schemas/property';
import { apiResponse } from '@/utils/apiResponse';
import { connectDb } from '@/db_connect/dbConnect';
import { Location } from '@/models';
import { Pagination, SingleProperTy } from '@/lib/types';

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
}: {
  priceMin?: string;
  priceMax?: string;
  baths?: string;
  beds?: string;
  propertyType?: string[];
  squareFeetMin?: string;
  squareFeetMax?: string;
  amenities: string[];
  latitude?: string;
  longitude?: string;
  limit?: string;
  page?: string;
  city?: string;
  country?: string;
  polygon?: string;
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

  if (propertyType && propertyType.length > 0) {
    query['property.propertyType'] = { $in: propertyType };
  }

  if (amenities.length > 0) {
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
  const property = await Property.findById(propertyId).populate('locationId');
  const propertyObj = property.toObject();
  propertyObj.location = propertyObj.locationId;
  delete propertyObj.locationId;
  return propertyObj;
};

export const deletePropertyById = async (propertyId: string) => {
  const reuslt = await Property.findByIdAndDelete(propertyId);
  await Location.deleteOne({ _id: reuslt.locationId });
};

// export const getFavouriteProperties = async(userId: string)=> {
//   const page = parseInt(searchParams.get('page') || '1');
//       const limit = parseInt(searchParams.get('limit') || '10');
//       const skip = (page - 1) * limit;

//       if (!user) {
//         return NextResponse.json(
//           { message: 'You are not authorized to perform this action' },
//           { status: 401 }
//         );
//       }

//       const properties = await FavouriteProperty.aggregate([
//         {
//           $match: {
//             userId: new mongoose.Types.ObjectId(user.userId),
//           },
//         },
//         {
//           $lookup: {
//             from: 'properties',
//             localField: 'propertyId',
//             foreignField: '_id',
//             as: 'property',
//           },
//         },
//         {
//           $addFields: {
//             property: { $first: '$property' },
//           },
//         },
//         {
//           $lookup: {
//             from: 'locations',
//             localField: 'property.locationId',
//             foreignField: '_id',
//             as: 'location',
//           },
//         },
//         {
//           $addFields: {
//             'property.location': { $first: '$location' },
//           },
//         },
//         {
//           $project: {
//             property: 1,
//           },
//         },
//         {
//           $skip: skip,
//         },
//         {
//           $limit: limit,
//         },
//       ]);
//       const totalCount = await FavouriteProperty.countDocuments({
//         userId: user.userId,
//       });
//       const totalPages = Math.floor(totalCount / limit);
//       const pagination: Pagination = {
//         totalItems: totalCount,
//         currentPage: page,
//         totalPages: totalPages,
//       };
// }
