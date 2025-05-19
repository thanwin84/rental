import customFetch from '@/utils/customFetch';
import { PropertyListApiResponse, PropertyOnMap } from '../types';

export const createProperty = (formData: FormData) =>
  customFetch.post('/api/properties', formData);

export const getProperties = (
  queryParams?: string
): Promise<PropertyListApiResponse> =>
  customFetch.get(`/api/properties?${queryParams}`);

export const getPropertiesWithin = (
  polygon: string
): Promise<PropertyOnMap[]> =>
  customFetch.get(`/api/properties/within?polygon=${polygon}`);
