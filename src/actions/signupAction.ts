'use server';
import { createUser } from '@/lib/db';
import { singupFormSchema } from '@/lib/schemas/user';
import { getFormValues } from '@/utils/getFormValues';
import { AxiosError } from 'axios';

export async function signupAction(_prevState: unknown, formData: FormData) {
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
    await createUser(data);
    formState.success = true;
    return formState;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      formState.message = error.response.data.message;
    } else if (error instanceof Error) {
      formState.message = error?.message;
    }
    return formState;
  }
}
