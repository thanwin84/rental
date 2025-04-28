import { Property } from '@/models';
import { PropertyType } from '../schemas/property';
import { apiResponse } from '@/utils/apiResponse';

export const createProperty = async (data: PropertyType) => {
  const newProperty = await Property.create(data);
  return apiResponse({
    success: true,
    message: 'Property is created successfully',
    status: 201,
    data: newProperty,
  });
};
