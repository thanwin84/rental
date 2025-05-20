'use client';

import { useCreateProperty } from '@/hooks';
import { PropertyForm } from '@/forms';

type Props = {
  className?: string;
};

export default function CreatePropertyForm({}: Props) {
  const { createProperty, isPending } = useCreateProperty();

  return <PropertyForm isPending={isPending} onFormSubmit={createProperty} />;
}
