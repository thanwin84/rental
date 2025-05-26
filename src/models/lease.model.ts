import { LEASE_STATUSES } from '@/lib/constants';
import { TLease } from '@/lib/types';
import mongoose, { Model } from 'mongoose';

const leaseSchema = new mongoose.Schema<TLease>(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
    startDate: Date,
    endDate: Date,
    monthlyRent: Number,
    securityDeposit: Number,
    status: {
      type: String,
      enum: Object.values(LEASE_STATUSES),
      default: LEASE_STATUSES.PENDING,
    },
  },
  { timestamps: true }
);

export const Lease: Model<TLease> =
  mongoose.models.Lease || mongoose.model<TLease>('Lease', leaseSchema);
