import customFetch from '@/utils/customFetch';

export const createProperty = (formData: FormData) =>
  customFetch.post('/api/properties', formData);
