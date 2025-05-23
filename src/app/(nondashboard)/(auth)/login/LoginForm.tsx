'use client';
import FormInput from '@/components/FormInput';
import Logo from '@/components/Logo';
import Password from '@/components/Password';
import { Button } from '@/components/ui/button';
import { useActionState, useEffect, useState } from 'react';
import { LoadingButton } from '@/components/LoadingButton';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { loginAction } from '@/actions';
import { useAuthStore } from '@/lib/store/auth';

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined);
  const authStore = useAuthStore();
  const router = useRouter();
  const [fieldsTouched, setFieldsTouched] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    if (state && state.success) {
      toast.success('User is loginned successfully');
      authStore.loadUser();
      router.push('/');
    } else {
      if (state?.message) {
        toast.error(state.message);
      }
    }
  }, [router, state]);

  const handleSubmit = async (formData: FormData) => {
    setFieldsTouched({
      email: false,
      password: false,
    });
    action(formData);
  };
  function handleOnChange(value: string) {
    setFieldsTouched((prev) => ({ ...prev, [value]: true }));
  }
  // Get error message for a field only if it hasn't been touched after errors appeared
  function getErrorMessage(fieldName: string, errorMessage?: string) {
    const message = fieldsTouched[fieldName as keyof typeof fieldsTouched]
      ? ''
      : errorMessage;

    return message;
  }

  return (
    <form
      action={handleSubmit}
      className='p-6 rounded-md shadow-lg space-y-4 border lg:w-[40%] md:w-[60%] mx-auto'
    >
      <Logo className='text-xl' dark={false} />
      <h2 className='text-slate-700'>
        <span className='font-bold'>Welcome!</span> Please log in to coninue.
      </h2>

      <FormInput
        label='Email'
        name='email'
        placeholder='Your email'
        type='email'
        errorMessage={getErrorMessage(
          'email',
          state?.errors?.email?.[0] as string
        )}
        defaultValue={state?.formState.email as string}
        onChange={() => handleOnChange('email')}
      />
      <Password
        errorMessage={getErrorMessage(
          'password',
          state?.errors?.password?.[0] as string
        )}
        defaultValue={state?.formState.password as string}
        onChange={() => handleOnChange('password')}
      />

      {pending ? (
        <LoadingButton text='In progess..' />
      ) : (
        <Button
          className='w-full bg-zinc-800 hover:bg-zinc-900 cursor-pointer'
          type='submit'
        >
          Login
        </Button>
      )}
    </form>
  );
}
