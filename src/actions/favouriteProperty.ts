'use server';

import { addToFavourite } from '@/lib/db';
import { verifySession } from '@/lib/session';
import { failure, success } from '@/utils';
import { revalidatePath } from 'next/cache';

export const addToFavouritePropertyAction = async (propertyId: string) => {
  const session = await verifySession();
  try {
    const result = await addToFavourite({
      propertyId: propertyId,
      userId: session.userId,
    });

    return success(result);
  } catch {
    return failure('Failed to add to favourite list', '500');
  } finally {
    revalidatePath('/properties/search');
  }
};
