'use client';
import { updateUserAction } from '@/actions';
import FormInput from '@/components/FormInput';
import { LoadingButton } from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/lib/store/auth';
import { useActionState, useEffect, useState } from 'react';
import { toast } from 'sonner';

// TODO: Toast does not work for subsequent successful form update
export function TanentSettingForm({
  firstName,
  lastName,
  email,
  className,
  id,
}: {
  firstName: string;
  lastName: string;
  email: string;
  className?: string;
  id: string;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { loadUser } = useAuthStore();

  const [state, formAction, isPending] = useActionState(updateUserAction, {
    formState: { firstName: firstName, lastName: lastName, email: email },
    message: '',
    success: false,
    errors: undefined,
  });
  const [fieldsTouched, setFieldsTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });
  async function handleFormAction(formData: FormData) {
    setFieldsTouched({
      firstName: false,
      lastName: false,
      email: false,
    });
    const form = formData;
    form.append('id', id);
    formAction(form);
  }
  function handleOnChange(value: string) {
    setFieldsTouched((prev) => ({ ...prev, [value]: true }));
  }
  function getErrorMessage(fieldName: string, errorMessage?: string) {
    const message = fieldsTouched[fieldName as keyof typeof fieldsTouched]
      ? ''
      : errorMessage;

    return message;
  }

  useEffect(() => {
    if (state.success) {
      loadUser();
      toast.success('You have updated your information successfully');
    }
  }, [loadUser, state.success]);

  return (
    <form
      action={handleFormAction}
      className={`w-full space-y-2 p-6 border shadow-md rounded-lg ${className}`}
    >
      <div className='bg-white mb-4'>
        <h2 className='text-xl font-semibold text-gray-900'>Tenant Settings</h2>
        <p className='text-sm text-gray-600 mt-1'>
          View and change your profile settings here.
        </p>
      </div>
      <FormInput
        disabled={!isEdit}
        label='First Name'
        name='firstName'
        placeholder='Your first name'
        className={`w-full`}
        defaultValue={state.formState?.firstName as string}
        errorMessage={getErrorMessage(
          'firstName',
          state?.errors?.firstName?.[0] as string
        )}
        onChange={() => handleOnChange('firstName')}
      />
      <FormInput
        disabled={!isEdit}
        label='Last Name'
        name='lastName'
        placeholder='Your last Name'
        defaultValue={state.formState?.lastName as string}
        errorMessage={getErrorMessage(
          'lastName',
          state?.errors?.lastName?.[0] as string
        )}
        onChange={() => handleOnChange('lastName')}
      />
      <FormInput
        label='Email'
        name='email'
        placeholder='Your email'
        type='email'
        disabled={!isEdit}
        defaultValue={state.formState?.email as string}
        errorMessage={getErrorMessage(
          'email',
          state?.errors?.email?.[0] as string
        )}
        onChange={() => handleOnChange('email')}
      />
      {!isEdit ? (
        <Button
          className='w-full mt-2 bg-stone-700 hover:bg-stone-800 cursor-pointer'
          type='button'
          onClick={() => setIsEdit(true)}
        >
          Edit
        </Button>
      ) : (
        <div className='w-full mt-2 flex gap-2'>
          {isPending ? (
            <LoadingButton className='flex-1' text='Updaing Changes' />
          ) : (
            <Button
              className='flex-1 bg-stone-700 hover:bg-stone-800 cursor-pointer'
              type='submit'
            >
              Update Changes
            </Button>
          )}
          <Button
            className='flex-1 cursor-pointer'
            type='button'
            variant='secondary'
            disabled={isPending}
            onClick={() => setIsEdit(false)}
          >
            Cancel
          </Button>
        </div>
      )}
    </form>
  );
}
