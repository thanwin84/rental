import { Schema, model, models } from 'mongoose';

const locationSchema = new Schema(
  {
    address: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    coordinates: [Number],
  },
  {
    timestamps: true,
  }
);

const Location = models.Location || model('Location', locationSchema);
export default Location;
