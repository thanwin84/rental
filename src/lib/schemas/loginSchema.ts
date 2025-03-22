import z from 'zod';

export const loginFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
});
