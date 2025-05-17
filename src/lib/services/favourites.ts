import customFetch from '@/utils/customFetch';
import { FavouriteIdListApiReponse } from '../types';

export const addToFavourite = (propertyId: string) =>
  customFetch.post('/api/favourites', {
    propertyId,
  });
export const getFavouritesIdList = (): Promise<FavouriteIdListApiReponse> =>
  customFetch.get('/api/favourites/favouritesIdList');
