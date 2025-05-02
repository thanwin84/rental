'use client';
import { propertyService } from '@/lib/services';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCreateProperty = () => {
  const {
    mutate: createProperty,
    isPending,
    isError,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: (formData: FormData) =>
      propertyService.createProperty(formData),
  });
  if (isSuccess) {
    toast.success('Successfully created property');
    reset();
  }
  return {
    createProperty,
    isError,
    isPending,
    isSuccess,
  };
};
