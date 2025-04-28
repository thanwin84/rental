import { Spinner } from '@/components';

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner />
    </div>
  );
}
