import { z } from 'zod';

export const locationSchema = z.object({
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  coordinates: z
    .array(z.number())
    .length(2, 'Coordinates must be an array of two numbers [lng, lat]'),
});

export type Location = z.infer<typeof locationSchema>;
