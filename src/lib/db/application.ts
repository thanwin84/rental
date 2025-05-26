import { connectDb } from '@/db_connect/dbConnect';
import { Application, Lease, Property } from '@/models';
import mongoose, { PipelineStage } from 'mongoose';
import { TApplication } from '../types/application';

connectDb();
const pipeline: PipelineStage[] = [
  {
    $lookup: {
      from: 'users',
      localField: 'userId',
      foreignField: '_id',
      as: 'applicant',
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
    $lookup: {
      from: 'leases',
      localField: 'leaseId',
      foreignField: '_id',
      as: 'lease',
    },
  },
  {
    $addFields: {
      property: { $first: '$property' },
      applicant: { $first: '$applicant' },
      lease: { $first: '$lease' },
    },
  },
  {
    $lookup: {
      from: 'locations',
      localField: 'property.locationId',
      foreignField: '_id',
      as: 'property.location',
    },
  },
  {
    $addFields: {
      'property.location': { $first: '$property.location' },
    },
  },
  {
    $lookup: {
      from: 'users',
      localField: 'property.ownerId',
      foreignField: '_id',
      as: 'propertyOwner',
    },
  },
  {
    $addFields: {
      propertyOwner: { $first: '$propertyOwner' },
    },
  },
  {
    $project: {
      userId: 0,
      propertyId: 0,
      __v: 0,
      leaseId: 0,
    },
  },
];

export const createApplication = async ({
  userId,
  propertyId,
  startDate,
  endDate,
}: {
  userId: string;
  propertyId: string;
  startDate: string;
  endDate: string;
}) => {
  const property = await Property.findById(propertyId);
  if (!property) {
    throw new Error('Property not found');
  }

  const lease = await Lease.create({
    tenantId: userId,
    propertyId,
    startDate,
    endDate,
    monthlyRent: property.pricePerMonth,
    securityDeposit: property.securityDeposit,
  });

  const newApplication = await Application.create({
    userId: userId,
    propertyId: propertyId,
    leaseId: lease._id.toString(),
  });
  return newApplication;
};

export const listApplications = async ({
  userId,
  limit = 10,
  page = 1,
  applicationId,
}: {
  userId?: string;
  limit?: number;
  page?: number;
  applicationId?: string;
}) => {
  const skips = (page - 1) * limit;

  const matchStages: PipelineStage[] = [];
  if (userId) {
    matchStages.push({
      $match: {
        userId: new mongoose.Types.ObjectId(userId),
      },
    });
  }
  if (applicationId) {
    matchStages.push({
      $match: {
        _id: new mongoose.Types.ObjectId(applicationId),
      },
    });
  }

  const aggregationPipeline: PipelineStage[] = [
    ...matchStages,
    ...pipeline,
    { $skip: skips },
    { $limit: limit },
  ];

  const applications: TApplication[] = await Application.aggregate(
    aggregationPipeline
  );

  const countPipeline: PipelineStage[] = [
    ...matchStages,
    ...pipeline,
    { $count: 'total' },
  ];
  const countResult = await Application.aggregate(countPipeline);
  const total = countResult.length > 0 ? Number(countResult[0].total) : 0;
  const totalPages = Math.ceil(total / limit);

  return { applications, total, page, limit, totalPages };
};

export const updateApplicationStatus = async (
  applicationId: string,
  status: string
) => {
  const application = await Application.findByIdAndUpdate(
    applicationId,
    {
      status,
      updatedAt: new Date(),
    },
    { new: true }
  );
  if (!application) {
    throw new Error(`Application wiht ${applicationId} not found`);
  }
  return application;
};
