import { connectDb } from '@/db_connect/dbConnect';
import { Location as LocationType } from '../schemas/location';
import { Location } from '@/models';

connectDb();

export const createLocation = async (data: LocationType) => {
  const location = await Location.create(data);
  return location;
};
