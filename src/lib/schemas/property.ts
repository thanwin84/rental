import { z } from 'zod';
import { highlight, amenity, propertyType } from '../constants';
import { locationSchema } from './location';

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const PropertyTypeEnum = z.enum(
  Object.values(propertyType) as [keyof typeof propertyType]
);
const AmenityEnum = z.enum(Object.values(amenity) as [keyof typeof amenity]);
const HighlightEnum = z.enum(
  Object.values(highlight) as [keyof typeof highlight]
);

export const propertyZodSchema = z.object({
  property: z.object({
    name: z.string().trim().min(1, 'Name is required'),
    description: z.string().min(1, 'Description is required'),
    pricePerMonth: z.coerce.number({ message: 'Price per month is required' }),
    securityDeposit: z.coerce.number({
      message: 'Security deposit is required.',
    }),
    applicationFee: z.coerce.number(),
    amenities: z.array(AmenityEnum).optional(),
    highLights: z.array(HighlightEnum).optional(),
    isParkingIncluded: z.boolean().optional(),
    beds: z.coerce
      .number({ message: 'Beds is required' })
      .min(0, 'Beds must be a positive number'),
    baths: z.coerce
      .number({ message: 'Baths is required' })
      .min(0, 'Baths must be a positive number'),
    squareFeet: z.coerce.number().optional(),
    propertyType: PropertyTypeEnum,
    averageRating: z.coerce.number().optional(),
    numberOfReviews: z.coerce.number().optional(),
    isAvailable: z.coerce.boolean(),
    image: z
      .instanceof(File)
      .optional()
      .refine((file) => !file || file.size <= 500000, {
        message: 'Image size must be under 0.5MB',
      })
      .refine((file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type), {
        message: 'Only JPEG, JPG, PNG, or WEBP files are accepted',
      }),
  }),
  location: locationSchema.omit({ coordinates: true }),
});

export const rentFormSchema = z
  .object({
    startDate: z.string().nonempty({ message: 'Starting month is required' }),
    endDate: z.string().nonempty({ message: 'Ending month is required' }),
  })
  .refine(
    (data) => {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      return start <= end;
    },
    {
      message: 'Ending month must be after or the same as the starting month',
      path: ['endDate'], // Apply error to endMonth field
    }
  );

export type RentFormType = z.infer<typeof rentFormSchema>;

export type PropertyType = z.infer<typeof propertyZodSchema>;
