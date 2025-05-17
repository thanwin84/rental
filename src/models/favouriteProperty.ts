import mongoose from 'mongoose';

const favouritePropertySchema = new mongoose.Schema(
  {
    propertyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Property',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FavouriteProperty =
  mongoose.models.FavouriteProperty ||
  mongoose.model('FavouriteProperty', favouritePropertySchema);
