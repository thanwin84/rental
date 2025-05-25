'use client';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { generateNext12Months } from '@/utils';
import { format } from 'date-fns';
import { useFormContext } from 'react-hook-form';

export default function MonthSelect({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full cursor-pointer'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className='w-full cursor-pointer'>
                <SelectValue placeholder='Choose a month' defaultValue=''>
                  {field.value
                    ? format(new Date(field.value), 'MMMM yyyy')
                    : ''}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {generateNext12Months().map((date) => (
                  <SelectItem
                    key={date.toISOString()}
                    value={date.toISOString()}
                  >
                    {format(date, 'MMMM yyyy')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
