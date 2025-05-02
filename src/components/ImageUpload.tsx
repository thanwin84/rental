'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { Camera } from 'lucide-react';
import { Input } from './ui/input';
import Image from 'next/image';
import { PropertyType } from '@/lib/schemas';

export default function ImageUpload({}) {
  const [filePreview, setFilePreview] = useState<string | null>();
  const {
    control,
    formState: { errors },
  } = useFormContext<PropertyType>();

  return (
    <div>
      <FormField
        name='property.image'
        control={control}
        render={({ field }) => (
          <FormItem className='relative w-56 h-56 rounded-lg border border-dashed overflow-hidden group'>
            <FormLabel
              htmlFor='image-upload'
              className='w-full h-full flex items-center justify-center cursor-pointer'
            >
              {filePreview ? (
                <Image
                  src={filePreview}
                  alt='Preview'
                  fill
                  className='object-cover transition-opacity duration-200 group-hover:opacity-80'
                />
              ) : (
                <span className='text-slate-400 text-sm'>
                  Click here to upload
                </span>
              )}
              <div className='absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity'>
                <Camera size={30} className='text-white' />
              </div>
            </FormLabel>

            <FormControl>
              <Input
                id='image-upload'
                type='file'
                accept='image/*'
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  field.onChange(file);
                  const fileUrl = file ? URL.createObjectURL(file) : '';
                  if (fileUrl) {
                    setFilePreview(fileUrl);
                  }
                }}
                className='hidden'
              />
            </FormControl>
          </FormItem>
        )}
      />
      {errors?.property?.image?.message && (
        <span className='text-sm text-red-700'>
          {errors.property.image.message}
        </span>
      )}
    </div>
  );
}
