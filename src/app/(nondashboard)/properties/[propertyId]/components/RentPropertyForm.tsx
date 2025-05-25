'use client';

import { useForm } from 'react-hook-form';
import MonthSelect from './MonthSelect';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { rentFormSchema, RentFormType } from '@/lib/schemas';
import { createApplicationAction } from '@/actions';
import { LoadingButton } from '@/components/LoadingButton';
import { toast } from 'sonner';
import { usePropertyStore } from '@/lib/store';

type Props = {
  className?: string;
  propertyId: string;
  closeModal: () => void;
};

export default function RentPropertyForm({
  className = '',
  propertyId,
  closeModal,
}: Props) {
  const form = useForm<RentFormType>({
    resolver: zodResolver(rentFormSchema),
    defaultValues: {
      startDate: '',
      endDate: '',
    },
  });
  const { addRentedPropertyId } = usePropertyStore();
  async function handleSubmit(formdata: RentFormType) {
    const result = await createApplicationAction({
      propertyId: propertyId,
      startDate: formdata.startDate,
      endDate: formdata.endDate,
    });
    if (result.success) {
      toast.success('Successfully applied to rent this property');
      addRentedPropertyId(propertyId);
      closeModal();
      form.reset();
    } else {
      toast.error(result.error?.message);
    }
  }

  return (
    <div className={` ${className}`}>
      <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
        Rent Apartment
      </h2>
      <p className='text-sm text-gray-500 mb-6'>
        Select the rental duration below.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={`w-full space-y-6 transition-opacity ${
            form.formState.isSubmitting ? 'opacity-50 pointer-events-none' : ''
          }`}
        >
          <MonthSelect label='Starting Month' name='startDate' />
          <MonthSelect label='End Month' name='endDate' />
          {form.formState.isSubmitting ? (
            <LoadingButton className='w-full' text='' />
          ) : (
            <Button className='w-full cursor-pointer ' type='submit'>
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
