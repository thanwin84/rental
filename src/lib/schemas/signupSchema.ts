import z from 'zod';

export const singupFormSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .min(3, 'First name should be at least 3 chars long'),
  lastName: z
    .string()
    .min(1, 'First Name is required')
    .min(3, 'First name must be at least 3 chars long'),
  username: z
    .string()
    .min(1, 'Username is required')
    .min(3, 'At least 3 chars needed'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter'),
  role: z.enum(['tanent', 'manager'], {
    required_error: 'Please select an option',
  }),
});
