import { z } from 'zod';
import { highlight, amenity, propertyType } from '../constants';
import mongoose from 'mongoose';
import { Location } from './location';

const PropertyTypeEnum = z.enum(
  Object.values(propertyType) as [keyof typeof propertyType]
);
const AmenityEnum = z.enum(Object.values(amenity) as [keyof typeof amenity]);
const HighlightEnum = z.enum(
  Object.values(highlight) as [keyof typeof highlight]
);

export const propertyZodSchema = z.object({
  name: z.string().trim().min(1, 'Property name is required'),
  description: z.string().min(1, 'Description is required'),
  pricePerMonth: z.number().min(0, 'Price must be a positive number'),
  securityDeposit: z.number().optional(),
  applicationFee: z.number().optional(),
  photoUrLs: z.array(z.string().url()).optional(),
  amenities: z.array(AmenityEnum).optional(),
  highLights: z.array(HighlightEnum).optional(),
  isParkingIncluded: z.boolean().optional(),
  beds: z.number().min(0, 'Beds must be a positive number'),
  baths: z.number().min(0, 'Baths must be a positive number'),
  squareFeet: z.number().optional(),
  propertyType: PropertyTypeEnum,
  averageRating: z.number().default(0),
  numberOfReviews: z.number().default(0),
  locationId: z
    .string()
    .refine((value) => mongoose.Types.ObjectId.isValid(value), {
      message: 'Location id must be valid ',
    }),
  ownerId: z
    .string()
    .refine((value) => mongoose.Types.ObjectId.isValid(value), {
      message: 'User id must be valid ',
    }),
});

export type PropertyType = z.infer<typeof propertyZodSchema>;

export type PropertyApiReponse = Omit<PropertyType, 'ownerId' |'locationId'> & {location: Location} & {
  user: User
}
