import { Property } from '@/models';
import { PropertyType } from '../schemas/property';
import { apiResponse } from '@/utils/apiResponse';
import { connectDb } from '@/db_connect/dbConnect';
import { Location } from '@/models';
import { Pagination } from '../types';

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

export const getProperties = async (searchParams: URLSearchParams) => {
  const priceMin = searchParams.get('priceMin');
  const priceMax = searchParams.get('priceMax');
  const baths = searchParams.get('baths');
  const beds = searchParams.get('beds');
  const propertyType = searchParams.getAll('propertyType');
  const squareFeetMin = searchParams.get('squareFeetMin');
  const squareFeetMax = searchParams.get('squareFeetMax');
  const amenities = searchParams.getAll('amenities');
  const latitude = searchParams.get('latitude');
  const longitude = searchParams.get('longitude');
  const limit = Number(searchParams.get('limit')) || 10;
  const page = Number(searchParams.get('page')) || 1;
  const skips = (page - 1) * limit;
  const city = searchParams.get('city');
  const country = searchParams.get('country');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = {};
  if (city) {
    query.city = { $regex: city, $options: 'i' };
  }
  if (country) {
    query.country = { $regex: country, $options: 'i' };
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

  if (propertyType.length > 0) {
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
    },
  };
  const queryStage = {
    $match: query,
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pipeline: any = [
    lookupStage,
    addFieldStage,
    queryStage,
    {
      $skip: skips,
    },
    {
      $limit: limit,
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

  const properties = await Location.aggregate(pipeline);
  const countResult = await Location.aggregate([
    ...countPipeline,
    { $count: 'total' },
  ]);
  const total = countResult[0]?.total || 0;
  const totalPages = Math.ceil(total / limit);

  const pagination: Pagination = {
    totalItems: total,
    totalPages,
    currentPage: page,
  };
  return {
    properties: properties,
    pagination,
  };
};

export const getSingleProperty = async (propertyId: string) => {
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
