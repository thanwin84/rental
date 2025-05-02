import { Checkbox } from '@/components/ui/checkbox';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { propertyType } from '@/lib/constants';
import { PropertyType } from '@/lib/schemas';

import { useFormContext } from 'react-hook-form';

type Props = {
  className?: string;
};

export default function PropertyDetailsForm({}: Props) {
  const { control } = useFormContext<PropertyType>();

  return (
    <div>
      <h2 className='text-xl font-semibold text-slate-800 mb-3'>
        Property Details
      </h2>
      <div className='space-y-2 md:grid md:grid-cols-3 gap-3'>
        <FormField
          control={control}
          name='property.beds'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-700'>Number of Beds</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='property.baths'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-700'>Number of Baths</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='property.squareFeet'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-slate-700'>Square Feet</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='property.isParkingIncluded'
          render={({ field }) => (
            <FormItem className='w-full flex items-center space-x-3 space-y-0 cursor-pointer'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='border border-slate-600 cursor-pointer'
                />
              </FormControl>
              <FormLabel className='text-slate-700 cursor-pointer'>
                Parking Included
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name='property.propertyType'
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormLabel className='text-slate-700'>Property Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select Property Type' />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(propertyType).map((label) => (
                      <SelectItem value={label} key={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
