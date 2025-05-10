import { paymentStatus } from '@/lib/constants';
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    leaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Lease' },
    amount: Number,
    type: { type: String, enum: Object.values(paymentStatus) },
    paymentDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

const Payment =
  mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
export default Payment;
