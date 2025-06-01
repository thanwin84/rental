'use client';
import { PropertyForm } from '@/forms';
import { useUpdateProperty } from '@/hooks';
import { Property } from '@/lib/types';

type Props = {
  className?: string;
  property: Property;
};

export default function EditPropertyForm({ property, className }: Props) {
  const { isPending, updateProperty } = useUpdateProperty();
  function handleSubmit(formData: FormData) {
    updateProperty({ formData, propertyId: property.id });
  }
  return (
    <PropertyForm
      formType='edit'
      className={className}
      initailData={property}
      onFormSubmit={handleSubmit}
      isPending={isPending}
    />
  );
}
