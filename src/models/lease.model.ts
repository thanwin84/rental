import { TLease } from '@/lib/types';
import mongoose, { Model } from 'mongoose';

const leaseSchema = new mongoose.Schema<TLease>(
  {
    tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
    startDate: Date,
    endDate: Date,
    monthlyRent: Number,
    isActive: { type: Boolean, default: true },
    securityDeposit: Number,
  },
  { timestamps: true }
);

export const Lease: Model<TLease> =
  mongoose.models.Lease || mongoose.model<TLease>('Lease', leaseSchema);
