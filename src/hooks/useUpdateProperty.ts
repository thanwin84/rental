'use client';
import { propertyService } from '@/lib/services';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useUpdateProperty = () => {
  const {
    mutate: updateProperty,
    isPending,
    isError,
    isSuccess,
    reset,
  } = useMutation({
    mutationFn: ({
      formData,
      propertyId,
    }: {
      formData: FormData;
      propertyId: string;
    }) => propertyService.updateProperty(formData, propertyId),
  });
  if (isSuccess) {
    toast.success('Successfully updated property');
    reset();
  }
  return {
    updateProperty,
    isError,
    isPending,
    isSuccess,
  };
};
