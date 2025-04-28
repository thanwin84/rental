import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-background px-4'>
      <div className='max-w-md text-center'>
        <h1 className='text-5xl font-bold text-destructive mb-4'>401</h1>
        <h2 className='text-2xl font-semibold mb-2'>You are not authorized</h2>
        <p className='text-muted-foreground mb-6'>
          Sorry, you don't have permission to access this page.
        </p>

        <Link href='/login'>
          <Button>Go to Login</Button>
        </Link>
      </div>
    </div>
  );
}
