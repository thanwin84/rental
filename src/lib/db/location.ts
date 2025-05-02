import { connectDb } from '@/db_connect/dbConnect';
import { Location } from '@/models';

connectDb();
export type LocationType = {
  address?: string;
  city: string;
  state?: string;
  country: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
};

export const createLocation = async (data: LocationType) => {
  const location = await Location.create(data);
  return location;
};
