import { connectDb } from '@/db_connect/dbConnect';
import { Application, Lease, Property } from '@/models';
import mongoose from 'mongoose';
import { TApplication, TManagerApplication } from '../types/application';

connectDb();
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

export const getMyApplications = async ({
  userId,
  limit = 10,
  page = 1,
}: {
  userId: string;
  limit?: number;
  page?: number;
}) => {
  const skips = (page - 1) * limit;
  const applications: TApplication[] = await Application.aggregate([
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
      $lookup: {
        from: 'leases',
        localField: 'leaseId',
        foreignField: '_id',
        as: 'lease',
      },
    },
    {
      $addFields: {
        user: { $first: '$user' },
        property: { $first: '$property' },
        lease: { $first: '$lease' },
        manager: '$property.ownerId',
      },
    },
    {
      $addFields: {
        manager: { $first: '$manager' },
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'manager',
        foreignField: '_id',
        as: 'manager',
      },
    },
    {
      $addFields: {
        manager: { $first: '$manager' },
      },
    },
    {
      $project: {
        _id: 1,
        updatedAt: 1,
        createdAt: 1,
        property: 1,
        manager: 1,
        lease: 1,
      },
    },
    {
      $skip: skips,
    },
    { $limit: limit },
  ]);
  return applications;
};

export const getMyApplication = async (
  applicationId: string
): Promise<TApplication> => {
  const applications = await Application.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(applicationId),
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
        user: { $first: '$user' },
        property: { $first: '$property' },
        lease: { $first: '$lease' },
        manager: '$property.ownerId',
      },
    },
    {
      $addFields: {
        manager: { $first: '$manager' },
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'manager',
        foreignField: '_id',
        as: 'manager',
      },
    },
    {
      $addFields: {
        manager: { $first: '$manager' },
      },
    },
    {
      $project: {
        _id: 1,
        updatedAt: 1,
        createdAt: 1,
        property: 1,
        manager: 1,
        lease: 1,
      },
    },
  ]);
  if (applications.length === 0) {
    throw new Error(`Application with ${applicationId} not found`);
  }
  return applications[0];
};

export const getAllApplicationsForManger = async ({
  limit = 10,
  page = 1,
}: {
  limit?: number;
  page?: number;
}) => {
  const skips = (page - 1) * limit;
  const applications: TManagerApplication[] = await Application.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
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
        user: { $first: '$user' },
        property: { $first: '$property' },
        lease: { $first: '$lease' },
      },
    },
    {
      $project: {
        _id: 1,
        updatedAt: 1,
        createdAt: 1,
        property: 1,
        user: 1,
        lease: 1,
      },
    },
    {
      $skip: skips,
    },
    { $limit: limit },
  ]);
  return applications;
};
export const getSingleApplicationForManager = async (applicationId: string) => {
  const applications: TManagerApplication[] = await Application.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(applicationId),
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user',
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
        user: { $first: '$user' },
        property: { $first: '$property' },
        lease: { $first: '$lease' },
      },
    },
    {
      $project: {
        _id: 1,
        updatedAt: 1,
        createdAt: 1,
        property: 1,
        user: 1,
        lease: 1,
      },
    },
  ]);
  if (applications.length === 0) {
    throw new Error(`Application with id ${applicationId} not found`);
  }
  return applications[0];
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
