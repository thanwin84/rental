'use client';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { PropertyType, propertyZodSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import ImageUpload from '@/components/ImageUpload';
import {
  AdditionInformationForm,
  AmenitiesAndHighlightsForm,
  BasicInformationForm,
  FeesForm,
  PropertyDetailsForm,
} from '.';
import { useCreateProperty } from '@/hooks';
import { LoadingButton } from '@/components/LoadingButton';

type Props = {
  className?: string;
};

export default function CreatePropertyForm({}: Props) {
  const { createProperty, isPending } = useCreateProperty();
  const form = useForm<PropertyType>({
    resolver: zodResolver(propertyZodSchema),
    defaultValues: {
      property: {
        name: '',
        description: '',
        pricePerMonth: 0,
        securityDeposit: 0,
        applicationFee: 0,
        amenities: [],
        highLights: [],
        isParkingIncluded: false,
        beds: 0,
        baths: 0,
        squareFeet: 0,
      },
      location: {
        address: '',
        city: '',
        state: '',
        country: '',
      },
    },
  });

  function onHandleSubmit(formData: PropertyType) {
    const _formData = new FormData();
    const image = formData?.property.image;

    if (image) {
      _formData.append('image', image);
    }
    _formData.append('property', JSON.stringify(formData.property));
    _formData.append('location', JSON.stringify(formData.location));
    createProperty(_formData);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
        className='bg-white p-6 rounded-md shadow-md space-y-4'
      >
        <BasicInformationForm />
        <FeesForm />
        <PropertyDetailsForm />
        <AmenitiesAndHighlightsForm />
        <AdditionInformationForm />
        <div>
          <h2 className='text-xl font-semibold text-slate-800 mb-3'>Photos</h2>
          <ImageUpload />
        </div>
        {isPending ? (
          <LoadingButton className='w-full' text='In progress...' />
        ) : (
          <Button
            type='submit'
            className='w-full bg-stone-700 hover:bg-stone-800 cursor-pointer'
          >
            Create
          </Button>
        )}
      </form>
    </Form>
  );
}
