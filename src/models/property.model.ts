import mongoose, { Schema, model, models } from 'mongoose';

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Property name is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    pricePerMonth: {
      type: Number,
      required: [true, 'Monthly price is required'],
      min: [0, 'Price must be a positive number'],
    },
    securityDeposit: Number,
    applicationFee: Number,
    photoUrLs: [String],
    amenities: [String],
    highLights: [String],
    isParkingIncluded: Boolean,
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    squareFeet: Number,
    propertyType: {
      type: String,
      required: true,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Location',
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model('Property', propertySchema);
export default Property;
