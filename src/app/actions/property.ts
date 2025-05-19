'use server';

import { getProperties } from '@/lib/db';

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
