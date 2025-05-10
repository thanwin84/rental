import mongoose from 'mongoose';

const leaseSchema = new mongoose.Schema(
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

export const Lease =
  mongoose.models.Lease || mongoose.model('Lease', leaseSchema);
