import { Skeleton } from '@/components/ui/skeleton';

type Props = {
  className?: string;
};

export default function PropertyListingSkeleton({ className }: Props) {
  return (
    <div className={`p-4 grid grid-cols-1 md:grid-cols-3 gap-3  ${className}`}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className='border rounded-md shadow-sm overflow-hidden p-4 space-y-3'
        >
          {/* Image */}
          <Skeleton className='w-full h-40 rounded-md' />

          <div className='space-y-2 px-2'>
            {/* Title */}
            <Skeleton className='h-4 w-3/4' />
            {/* Location */}
            <Skeleton className='h-3 w-1/2' />
          </div>

          <div className='flex justify-between items-center px-2 mt-2'>
            {/* Rating */}
            <Skeleton className='h-4 w-1/3' />
            {/* Price */}
            <Skeleton className='h-4 w-1/4' />
          </div>

          <div className='flex justify-between items-center px-2 mt-3'>
            <Skeleton className='h-4 w-1/4' />
            <Skeleton className='h-4 w-1/4' />
            <Skeleton className='h-4 w-1/4' />
          </div>
        </div>
      ))}
    </div>
  );
}
