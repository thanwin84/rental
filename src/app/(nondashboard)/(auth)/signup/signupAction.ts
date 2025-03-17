'use server';
import { redirect } from 'next/navigation';
import { singupFormSchema } from '@/lib/schemas/signupSchema';
import customFetch from '@/utils/customFetch';
import { getFormValues } from '@/utils/getFormValues';

export async function signupAction(_prevState: any, formData: FormData) {
  const data = getFormValues(formData);
  const validationResult = singupFormSchema.safeParse(data);
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
    await customFetch.post('/api/users/register', data);
    formState.success = true;
    return formState;
  } catch (error: any) {
    formState.message = error.response.data.message;
    return formState;
  }
}
