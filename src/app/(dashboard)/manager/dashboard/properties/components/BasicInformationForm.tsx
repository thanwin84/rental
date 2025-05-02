import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PropertyType } from '@/lib/schemas';
import { useFormContext } from 'react-hook-form';

type Props = {
  className?: string;
};

export default function BasicInformationForm({}: Props) {
  const { control } = useFormContext<PropertyType>();
  return (
    <div className='space-y-3'>
      <h2 className='text-xl font-semibold text-slate-800 '>
        Basic Infomation
      </h2>
      <FormField
        control={control}
        name='property.name'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-slate-700'>Property Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder='Enter property name' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name='property.description'
        render={({ field }) => (
          <FormItem>
            <FormLabel className='text-slate-700'>Description</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
