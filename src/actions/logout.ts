'use server';

import { deleteSession } from '@/lib/session';
import customFetch from '@/utils/customFetch';

export const logout = async () => {
  await customFetch.get('/api/users/logout');
  await deleteSession();
};
