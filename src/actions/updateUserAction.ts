'use server';
import { singupFormSchema } from '@/lib/schemas/user';
import customFetch from '@/utils/customFetch';
import { getFormValues } from '@/utils/getFormValues';
import { AxiosError } from 'axios';

export async function updateUserAction(
  _prevState: unknown,
  formData: FormData
) {
  const data = getFormValues(formData);
  const validationResult = singupFormSchema
    .pick({
      email: true,
      firstName: true,
      lastName: true,
    })
    .safeParse(data);
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
    const id = data.id;
    delete data.id;
    await customFetch.put(`/api/users/${id}`, data);
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
