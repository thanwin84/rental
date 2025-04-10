'use client';
import FormInput from '@/components/FormInput';
import Logo from '@/components/Logo';
import Password from '@/components/Password';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useActionState, useEffect, useState } from 'react';
import { signupAction } from './signupAction';
import { LoadingButton } from '@/components/LoadingButton';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import customFetch from '@/utils/customFetch';

export default function SignupPage() {
  const [state, action, pending] = useActionState(signupAction, undefined);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [debouncedUsername] = useDebounce(username, 500);
  const router = useRouter();
  const [fieldsTouched, setFieldsTouched] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    if (state && state.success) {
      toast.success('User is registered successfully');
      router.push('/login');
    } else {
      if (state?.message) {
        toast.error(state.message);
      }
    }
  }, [state]);

  async function checkUsernameAvailability(username: string) {
    try {
      const { data } = await customFetch.post('/api/users/check-username', {
        username,
      });
      if (data.success) {
        setUsernameError('Username already exists.');
      } else {
        setUsernameError('');
      }
    } catch (error) {}
  }
  useEffect(() => {
    if (debouncedUsername) {
      checkUsernameAvailability(debouncedUsername);
    }
  }, [debouncedUsername]);
  const handleSubmit = async (formData: FormData) => {
    setFieldsTouched({
      firstName: false,
      lastName: false,
      username: false,
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
    <section className='p-8'>
      <form
        action={handleSubmit}
        className='p-6 rounded-md shadow-lg space-y-4 border lg:w-[40%] md:w-[60%] mx-auto'
      >
        <Logo className='text-xl' dark={false} />
        <h2 className='text-slate-700'>
          <span className='font-bold'>Welcome!</span> Please sign in to coninue.
        </h2>
        <div className='flex gap-4 '>
          <FormInput
            label='First Name'
            name='firstName'
            placeholder='Your first name'
            errorMessage={getErrorMessage(
              'firstName',
              state?.errors?.firstName?.[0] as string
            )}
            defaultValue={state?.formState.firstName as string}
            onChange={(e) => handleOnChange('firstName')}
          />
          <FormInput
            label='Last Name'
            name='lastName'
            placeholder='Your last Name'
            errorMessage={getErrorMessage(
              'lastName',
              state?.errors?.lastName?.[0] as string
            )}
            defaultValue={state?.formState.firstName as string}
            onChange={(e) => handleOnChange('lastName')}
          />
        </div>
        <FormInput
          label='Username'
          name='username'
          placeholder='Your username'
          type='text'
          errorMessage={state?.errors?.username?.[0] || usernameError}
          defaultValue={state?.formState.username as string}
          onChange={(e) => setUsername(e.target.value)}
        />
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
          onChange={(e) => handleOnChange('email')}
        />
        <Password
          errorMessage={getErrorMessage(
            'password',
            state?.errors?.password?.[0] as string
          )}
          defaultValue={state?.formState.password as string}
          onChange={(e) => handleOnChange('password')}
        />
        <div className='space-y-2'>
          <Label className='text-slate-700' htmlFor='role'>
            Role
          </Label>
          <RadioGroup id='role' name='role' defaultValue='tanent'>
            {[
              { value: 'tanent', text: 'Tanent' },
              { value: 'manager', text: 'Manager' },
            ].map((item) => (
              <div key={item.value} className='flex items-center space-x-2'>
                <RadioGroupItem value={item.value} id={item.value} />
                <Label htmlFor={item.value}>{item.text}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        {pending ? (
          <LoadingButton text='Creating..' />
        ) : (
          <Button
            className='w-full bg-zinc-800 hover:bg-zinc-900 cursor-pointer'
            type='submit'
          >
            Create Account
          </Button>
        )}
      </form>
    </section>
  );
}
