import { Types } from 'mongoose';

export type TLease = {
  _id: Types.ObjectId;
  tenantId: Types.ObjectId;
  propertyId: Types.ObjectId;
  startDate: Date;
  endDate: Date;
  monthlyRent: number;
  isActive: boolean;
  securityDeposit: number;
  createdAt: Date;
  updatedAt: Date;
};
