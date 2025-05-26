import { Types } from 'mongoose';
import { LEASE_STATUSES } from '../constants';

export type TLease = {
  _id: Types.ObjectId;
  tenantId: Types.ObjectId;
  propertyId: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  monthlyRent: number;
  status: string;
  securityDeposit: number;
  createdAt: Date;
  updatedAt: Date;
};

export type LeaseStatus = (typeof LEASE_STATUSES)[keyof typeof LEASE_STATUSES];
