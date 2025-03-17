'use client';
import FormInput from '@/components/FormInput';
import Logo from '@/components/Logo';
import Password from '@/components/Password';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useActionState, useEffect } from 'react';
import { signupAction } from './signupAction';
import { LoadingButton } from '@/components/LoadingButton';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const [state, action, pending] = useActionState(signupAction, undefined);
  const router = useRouter();

  useEffect(() => {
    if (state && state.success) {
      toast.success('User is registered successfully');
      router.push('/login');
    } else {
      toast.error(state?.message);
    }
  }, [state]);

  return (
    <section className="p-8">
      <form
        action={action}
        className="p-6 rounded-md shadow-lg space-y-4 border lg:w-[40%] md:w-[60%] mx-auto"
      >
        <Logo className="text-xl" dark={false} />
        <h2 className="text-slate-700">
          <span className="font-bold">Welcome!</span> Please sign in to coninue.
        </h2>
        <div className="flex gap-4 ">
          <FormInput
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            errorMessage={state?.errors?.firstName?.[0] as string}
            defaultValue={state?.formState.firstName as string}
          />
          <FormInput
            label="Last Name"
            name="lastName"
            placeholder="Your last Name"
            errorMessage={state?.errors?.lastName?.[0] as string}
            defaultValue={state?.formState.firstName as string}
          />
        </div>
        <FormInput
          label="Username"
          name="username"
          placeholder="Your username"
          type="text"
          errorMessage={state?.errors?.username?.[0] as string}
          defaultValue={state?.formState.username as string}
        />
        <FormInput
          label="First email"
          name="email"
          placeholder="Your email"
          type="email"
          errorMessage={state?.errors?.email?.[0] as string}
          defaultValue={state?.formState.email as string}
        />
        <Password
          errorMessage={state?.errors?.password?.[0] as string}
          defaultValue={state?.formState.password as string}
        />
        <div className="space-y-2">
          <Label className="text-slate-700" htmlFor="role">
            Role
          </Label>
          <RadioGroup id="role" name="role" defaultValue="tanent">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tanent" id="option-one" />
              <Label htmlFor="option-one">Tenant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="manager" id="option-two" />
              <Label htmlFor="option-two">Manager</Label>
            </div>
          </RadioGroup>
        </div>
        {pending ? (
          <LoadingButton text="Creating.." />
        ) : (
          <Button
            className="w-full bg-zinc-800 hover:bg-zinc-900 cursor-pointer"
            type="submit"
          >
            Create Account
          </Button>
        )}
      </form>
    </section>
  );
}
