'use client';
import { getFavouritesIdList } from '@/lib/services/favourites';
import { usePropertyStore } from '@/lib/store';
import { useEffect } from 'react';

export function InitFavouriteStore() {
  const { setFavouriteIds } = usePropertyStore();
  useEffect(() => {
    getFavouritesIdList()
      .then((ids) => setFavouriteIds(ids.favouritesIdList))
      .catch((err) => console.error('Failed to load favourite IDs:', err));
  }, []);

  return null;
}
