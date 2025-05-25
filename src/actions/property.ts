'use server';

import { getAuthenticatedUser } from '@/lib/auth';
import { getFavouriteProperties, getProperties } from '@/lib/db';
import { redirect } from 'next/navigation';

export const getPropertiesAction = async ({
  priceMin,
  priceMax,
  baths,
  beds,
  propertyType,
  squareFeetMin,
  squareFeetMax,
  amenities,
  latitude,
  longitude,
  limit,
  page,
  city,
  country,
  polygon,
}: {
  priceMin?: string;
  priceMax?: string;
  baths?: string;
  beds?: string;
  propertyType?: string[];
  squareFeetMin?: string;
  squareFeetMax?: string;
  amenities: string[];
  latitude?: string;
  longitude?: string;
  limit?: string;
  page?: string;
  city?: string;
  country?: string;
  polygon?: string;
}) => {
  const result = await getProperties({
    priceMin,
    priceMax,
    baths,
    beds,
    propertyType,
    squareFeetMin,
    squareFeetMax,
    amenities,
    latitude,
    longitude,
    limit,
    page,
    city,
    country,
    polygon,
  });
  return result;
};
export const getMyPropertiesAction = async ({
  page,
  limit = '6',
}: {
  page?: string;
  limit?: string;
}) => {
  const user = await getAuthenticatedUser();
  if (!user) {
    redirect('/login');
  }
  return await getProperties({
    userId: user.userId,
    page: page,
    limit: limit,
  });
};

export const getFavouritePropertiesAction = async ({
  page = 1,
  limit = 6,
}: {
  page?: number;
  limit?: number;
}) => {
  const user = await getAuthenticatedUser();
  if (!user) {
    redirect('/login');
  }
  return await getFavouriteProperties({
    userId: user.userId,
    page: page,
    limit: limit,
  });
};
