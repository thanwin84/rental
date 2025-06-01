'use client';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { PropertyFormType, propertyZodSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ImageUpload from '@/components/ImageUpload';
import { LoadingButton } from '@/components/LoadingButton';
import {
  BasicInformationForm,
  FeesForm,
  PropertyDetailsForm,
  AmenitiesAndHighlightsForm,
  AdditionInformationForm,
} from '@/app/(dashboard)/manager/dashboard/create-property/components';
import { Property } from '@/lib/types';

type Props = {
  className?: string;
  onFormSubmit: (form: FormData) => void;
  isPending: boolean;
  formType?: 'create' | 'edit';
  initailData?: Property;
};

export default function PropertyForm({
  onFormSubmit,
  isPending = false,
  formType = 'create',
  initailData,
  className,
}: Props) {
  const form = useForm<PropertyFormType>({
    resolver: zodResolver(propertyZodSchema),
    defaultValues: {
      property: {
        name: initailData?.name || '',
        description: initailData?.name || '',
        pricePerMonth: initailData?.pricePerMonth || 0,
        securityDeposit: initailData?.securityDeposit || 0,
        applicationFee: initailData?.applicationFee || 0,
        amenities: initailData?.amenities || [],
        highLights: initailData?.highLights || [],
        isParkingIncluded: initailData?.isParkingIncluded || false,
        beds: initailData?.beds || 0,
        baths: initailData?.baths || 0,
        squareFeet: initailData?.squareFeet || 0,
        isAvailable: initailData?.isAvailable || true,
        propertyType: initailData?.propertyType,
      },
      location: {
        address: '',
        city: '',
        state: '',
        country: '',
      },
    },
  });

  function onHandleSubmit(formData: PropertyFormType) {
    const _formData = new FormData();
    const image = formData?.property.image;

    if (image) {
      _formData.append('image', image);
    }
    _formData.append('property', JSON.stringify(formData.property));
    _formData.append('location', JSON.stringify(formData.location));
    onFormSubmit(_formData);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onHandleSubmit)}
        className={`bg-white p-6 rounded-md shadow-md space-y-4 ${className}`}
      >
        <BasicInformationForm />
        <FeesForm />
        <PropertyDetailsForm />
        <AmenitiesAndHighlightsForm />
        <AdditionInformationForm />
        <div>
          <h2 className='text-xl font-semibold text-slate-800 mb-3'>Photos</h2>
          <ImageUpload photoUrl={initailData?.photoUrls[0] as string} />
        </div>
        {isPending ? (
          <LoadingButton
            className='w-full'
            text={formType === 'create' ? 'Creating...' : 'Saving changes...'}
          />
        ) : (
          <Button
            type='submit'
            className='w-full bg-stone-700 hover:bg-stone-800 cursor-pointer'
          >
            {formType === 'create' ? 'Create' : 'Update Changes'}
          </Button>
        )}
      </form>
    </Form>
  );
}
