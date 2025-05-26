'use client';
import { getListOfRentedPropertyIdAction } from '@/actions';
import { getFavouritesIdList } from '@/lib/services/favourites';
import { usePropertyStore } from '@/lib/store';
import { useEffect } from 'react';

export function InitFavouriteStore() {
  const { setFavouriteIds, setRentedPropertyIds } = usePropertyStore();
  useEffect(() => {
    getFavouritesIdList()
      .then((ids) => setFavouriteIds(ids.favouritesIdList))
      .catch((err) => console.error('Failed to load favourite IDs:', err));
    const fun = async () => {
      const data = await getListOfRentedPropertyIdAction();
      setRentedPropertyIds(data?.data as string[]);
    };
    fun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
