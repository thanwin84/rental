import { applicationStatus } from '@/lib/constants';
import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(applicationStatus),
      default: applicationStatus.Pending,
    },
    applicationDate: { type: Date, default: Date.now },
    leaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lease' },
  },
  { timestamps: true }
);

const Application =
  mongoose.models.Application ||
  mongoose.model('Application', applicationSchema);
export default Application;
