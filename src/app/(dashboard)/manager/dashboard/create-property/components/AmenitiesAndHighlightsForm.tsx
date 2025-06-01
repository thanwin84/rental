'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { FormField, FormItem, FormLabel } from '@/components/ui/form';
import { amenity, highlight } from '@/lib/constants';
import { PropertyFormType } from '@/lib/schemas';
import { splitPascalCaseToString } from '@/utils';
import { useFormContext } from 'react-hook-form';

type Props = {
  className?: string;
};

export default function AmenitiesAndHighlightsForm({}: Props) {
  const { control } = useFormContext<PropertyFormType>();

  return (
    <div>
      <h2 className='text-xl font-semibold text-slate-800 mb-3'>
        Amenities and Hightlights
      </h2>
      <div className='mb-3'>
        <FormLabel className='text-slate-700 text-lg mb-3'>
          Select Amenities
        </FormLabel>
        <FormField
          control={control}
          name='property.amenities'
          render={({ field }) => (
            <FormItem>
              <div className='grid grid-cols-3 gap-3'>
                {Object.values(amenity).map((option) => {
                  const isChecked = field.value?.includes(option);
                  return (
                    <div className='flex gap-2' key={option}>
                      <Checkbox
                        id={option}
                        checked={isChecked}
                        onCheckedChange={() => {
                          const prevList = field.value ? field.value : [];
                          const newList = prevList.includes(option)
                            ? prevList.filter((item) => item !== option)
                            : [...prevList, option];
                          field.onChange(newList);
                        }}
                      />
                      <FormLabel htmlFor={option}>
                        {splitPascalCaseToString(option)}
                      </FormLabel>
                    </div>
                  );
                })}
              </div>
            </FormItem>
          )}
        />
      </div>
      <div>
        <FormLabel className='text-slate-700 text-lg mb-3'>
          Select Highlights
        </FormLabel>
        <FormField
          control={control}
          name='property.highLights'
          render={({ field }) => (
            <FormItem>
              <div className='grid grid-cols-3 gap-3'>
                {Object.values(highlight).map((option) => {
                  const isChecked = field.value?.includes(option);
                  return (
                    <div className='flex gap-2' key={option}>
                      <Checkbox
                        id={option}
                        checked={isChecked}
                        onCheckedChange={() => {
                          const prevList = field.value ? field.value : [];
                          const newList = prevList.includes(option)
                            ? prevList.filter((item) => item !== option)
                            : [...prevList, option];
                          field.onChange(newList);
                        }}
                      />
                      <FormLabel htmlFor={option}>
                        {splitPascalCaseToString(option)}
                      </FormLabel>
                    </div>
                  );
                })}
              </div>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
