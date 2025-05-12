import customFetch from '@/utils/customFetch';
import { LocationResponse, PropertyOnMap } from '../types';

export const createProperty = (formData: FormData) =>
  customFetch.post('/api/properties', formData);

export const getProperties = (
  queryParams?: string
): Promise<LocationResponse> =>
  customFetch.get(`/api/properties?${queryParams}`);

export const getPropertiesWithin = (
  polygon: string
): Promise<PropertyOnMap[]> =>
  customFetch.get(`/api/properties/within?polygon=${polygon}`);
