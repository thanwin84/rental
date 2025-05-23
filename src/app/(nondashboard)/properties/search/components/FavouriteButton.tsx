'use client';

import { addToFavouritePropertyAction } from '@/actions';
import { usePropertyStore } from '@/lib/store';
import { Heart } from 'lucide-react';
import { toast } from 'sonner';

export default function FavouriteButton({ id }: { id: string }) {
  const { favouriteIds, toggleFavourite } = usePropertyStore();

  async function handleOnToggleFavouriteId() {
    toggleFavourite(id);
    const result = await addToFavouritePropertyAction(id);
    if (!result.success) {
      toggleFavourite(id);
      toast.error(result.error?.message);
    }
  }
  return (
    <button
      onClick={handleOnToggleFavouriteId}
      className='absolute cursor-pointer top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:bg-white transition'
    >
      {favouriteIds.includes(id) ? (
        <Heart fill=' #f6339a' className='text-pink-500  w-5 h-5' />
      ) : (
        <Heart className='text-pink-500  w-5 h-5' />
      )}
    </button>
  );
}
