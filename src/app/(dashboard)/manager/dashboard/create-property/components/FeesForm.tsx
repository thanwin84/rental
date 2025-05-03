'use client';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PropertyType } from '@/lib/schemas';
import { useFormContext } from 'react-hook-form';

type Props = {
  className?: string;
};

export default function FeesForm({}: Props) {
  const { control } = useFormContext<PropertyType>();
  return (
    <div className=''>
      <h2 className='text-xl font-semibold text-slate-800 mb-3'>Fees</h2>
      <div className='space-y-2 md:grid md:grid-cols-3 gap-3'>
        <FormField
          control={control}
          name='property.pricePerMonth'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-700'>Price per month</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='property.securityDeposit'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-700'>Security Deposit</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='property.applicationFee'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-700'>Application Fee</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
