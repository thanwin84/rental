export * from './splitPascalCaseToString';
export * from './getFormValues';
export * from './customFetch';
export * from './apiResponse';
export * from './location';

export function offsetCoordinates([lng, lat]: [number, number]) {
  const offset = (Math.random() - 0.5) * 0.0005; // small shift
  return [lat + offset, lng + offset] as [number, number];
}
export function createPropertyQueryString({
  city,
  country,
  beds,
  baths,
  propertyType,
  amenities,
  priceMin,
  priceMax,
}: {
  city?: string;
  country?: string;
  beds?: string;
  baths?: string;
  propertyType?: string[];
  amenities?: string[];
  priceMin?: string;
  priceMax?: string;
}) {
  const queryParams = new URLSearchParams();

  if (city) {
    queryParams.append('city', city as string);
  }
  if (country) {
    queryParams.append('country', country as string);
  }

  if (beds) {
    queryParams.append('beds', beds as string);
  }
  if (baths) {
    queryParams.append('baths', baths as string);
  }
  if (propertyType && Array.isArray(propertyType)) {
    propertyType.forEach((item) => {
      queryParams.append('propertyType', item);
    });
  }
  if (amenities && Array.isArray(amenities)) {
    amenities.forEach((item) => {
      queryParams.append('amenities', item);
    });
  }
  if (priceMin) {
    queryParams.append('priceMin', priceMin as string);
  }
  if (priceMax) {
    queryParams.append('priceMax', priceMax as string);
  }
  return queryParams.toString();
}
