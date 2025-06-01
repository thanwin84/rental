'use client';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PropertyFormType } from '@/lib/schemas';
import { useFormContext } from 'react-hook-form';

type Props = {
  className?: string;
};

export default function AdditionInformationForm({ className }: Props) {
  const { control } = useFormContext<PropertyFormType>();
  return (
    <div className={`${className}`}>
      <h2 className='text-xl font-semibold text-slate-800 mb-3'>
        Additional Information
      </h2>
      <FormField
        control={control}
        name='location.address'
        render={({ field }) => (
          <FormItem className='mb-3'>
            <FormLabel className='text-slate-700'>Address</FormLabel>
            <FormControl>
              <Input {...field} placeholder='Enter property name' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className='flex flex-col md:flex-row gap-3'>
        <FormField
          control={control}
          name='location.city'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel className='text-slate-700'>City</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter property name' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='location.state'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel className='text-slate-700'>State</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter property name' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='location.country'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel className='text-slate-700'>Country</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Enter property name' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
