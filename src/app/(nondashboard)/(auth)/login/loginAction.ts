'use server';
import { loginFormSchema } from '@/lib/schemas/loginSchema';
import customFetch from '@/utils/customFetch';
import { getFormValues } from '@/utils/getFormValues';

export async function loginAction(_prevState: unknown, formData: FormData) {
  const data = getFormValues(formData);
  const validationResult = loginFormSchema.safeParse(data);
  const errors = validationResult.error?.flatten().fieldErrors;
  const formState = {
    formState: data,
    errors: errors,
    message: '',
    success: false,
  };
  if (!validationResult.success) {
    return formState;
  }
  try {
    await customFetch.post('/api/users/login', data);
    formState.success = true;
    return formState;
  } catch (error: any) {
    formState.message = error.response.data.message;
    return formState;
  }
}
