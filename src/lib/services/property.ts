import customFetch from '@/utils/customFetch';
import { LocationResponse } from '../types';

export const createProperty = (formData: FormData) =>
  customFetch.post('/api/properties', formData);

export const getProperties = (
  queryParams?: string
): Promise<LocationResponse> =>
  customFetch.get(`/api/properties?${queryParams}`);
