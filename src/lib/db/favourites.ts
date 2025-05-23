import { connectDb } from '@/db_connect/dbConnect';
import { FavouriteProperty } from '@/models';
import { FavouriteProperty as FavouritePropertyType } from '../types';

connectDb();
export const addToFavourite = async ({
  propertyId,
  userId,
}: {
  propertyId: string;
  userId: string;
}): Promise<FavouritePropertyType> => {
  const favouriteProperty = await FavouriteProperty.findOne({
    userId: userId,
    propertyId,
  });
  if (favouriteProperty) {
    await FavouriteProperty.findByIdAndDelete(favouriteProperty._id);
    return JSON.parse(JSON.stringify(favouriteProperty));
  } else {
    const favouriteProperty = await FavouriteProperty.create({
      userId: userId,
      propertyId,
    });
    return JSON.parse(JSON.stringify(favouriteProperty));
  }
};
