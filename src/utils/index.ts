export * from './splitPascalCaseToString';
export * from './getFormValues';
export * from './customFetch';
export * from './apiResponse';
export * from './location';
export * from './response';

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
  polygon,
}: {
  city?: string;
  country?: string;
  beds?: string;
  baths?: string;
  propertyType?: string[];
  amenities?: string[];
  priceMin?: string;
  priceMax?: string;
  polygon?: string;
}) {
  const queryParams = new URLSearchParams();

  if (city) {
    queryParams.append('city', city as string);
  }

  if (country) {
    queryParams.append('country', country as string);
  }
  if (polygon) {
    queryParams.append('polygon', polygon);
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

export function parsePropertySearchParams(
  searchParams: Record<string, string | string[] | undefined>
) {
  const toArray = (value: string | string[] | undefined): string[] =>
    Array.isArray(value) ? value : value ? [value] : [];

  return {
    priceMin: searchParams.priceMin as string,
    priceMax: searchParams.priceMax as string,
    baths: searchParams.baths as string,
    beds: searchParams.beds as string,
    propertyType: toArray(searchParams.propertyType),
    squareFeetMin: searchParams.squareFeetMin as string,
    squareFeetMax: searchParams.squareFeetMax as string,
    amenities: toArray(searchParams.amenities),
    latitude: searchParams.latitude as string,
    longitude: searchParams.longitude as string,
    limit: searchParams.limit as string,
    page: searchParams.page as string,
    city: searchParams.city as string,
    country: searchParams.country as string,
    polygon: searchParams.polygon as string,
  };
}
