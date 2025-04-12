import { Metadata } from 'next';
import SignupForm from './SingupForm';

export const metadata: Metadata = {
  title: 'Sign up',
};

export default function SignupPage() {
  return (
    <div className='py-10'>
      <SignupForm />
    </div>
  );
}
