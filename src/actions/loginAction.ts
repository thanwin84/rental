'use server';

import { loginFormSchema } from '@/lib/schemas';
import { createSession } from '@/lib/session';
import { TUser } from '@/lib/types';
import customFetch from '@/utils/customFetch';
import { getFormValues } from '@/utils/getFormValues';
import { AxiosError } from 'axios';

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
    const res: TUser = await customFetch.post('/api/users/login', data);
    await createSession(res._id.toString(), res.role);
    formState.success = true;
    return formState;
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
      formState.message = error.response.data.message;
    } else {
      formState.message = 'Something went wrong. Please try again.';
    }

    return formState;
  }
}
