'use server';

import { loginUser } from '@/lib/db';
import { loginFormSchema } from '@/lib/schemas';
import { createSession } from '@/lib/session';
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
    const res = await loginUser(data.email as string, data.password as string);
    await createSession(res.id.toString(), res.role);
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
