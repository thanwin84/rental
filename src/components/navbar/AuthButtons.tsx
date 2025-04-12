import Link from 'next/link';
import { Button } from '../ui/button';

type Props = {
  className?: string;
};

export default function AuthButtons({ className }: Props) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Link href='/login'>
        <Button
          className='cursor-pointer bg-transparent text-slate-200'
          variant='outline'
        >
          Sign in
        </Button>
      </Link>
      <Link href='/signup'>
        <Button className='cursor-pointer bg-red-400 hover:bg-red-500'>
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
