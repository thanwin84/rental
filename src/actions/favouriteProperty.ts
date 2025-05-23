'use server';

import { getUserFromToken } from '@/lib/auth';
import { addToFavourite } from '@/lib/db';
import { failure, success } from '@/utils';
import { revalidatePath } from 'next/cache';

export const addToFavouritePropertyAction = async (propertyId: string) => {
  const decodedToken = await getUserFromToken();
  if (!decodedToken) {
    return failure('You are not authorized to perform this action', '401');
  }
  try {
    const result = await addToFavourite({
      propertyId: propertyId,
      userId: decodedToken?.userId as string,
    });
    return success(result);
  } catch {
    return failure('Failed to add to favourite list', '500');
  } finally {
    revalidatePath('/properties/search');
  }
};
