import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function PropertyDetailsSkeleton() {
  return (
    <div className='max-w-5xl mx-auto p-6 space-y-6 animate-pulse'>
      {/* Title */}
      <div className='space-y-2'>
        <Skeleton className='h-8 w-3/4' />
        <Skeleton className='h-4 w-40' />
      </div>

      {/* Images */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className='w-full h-64 rounded-2xl' />
        ))}
      </div>

      {/* Main Card */}
      <Card>
        <CardContent className='p-6 space-y-4'>
          <div className='flex justify-between items-center'>
            <Skeleton className='h-6 w-32' />
            <Skeleton className='h-6 w-20' />
          </div>

          <Separator />

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className='h-4 w-28' />
            ))}
          </div>

          <Separator />

          <div className='space-y-2'>
            <Skeleton className='h-5 w-36' />
            <Skeleton className='h-16 w-full' />
          </div>

          <div className='space-y-2'>
            <Skeleton className='h-5 w-36' />
            <div className='flex flex-wrap gap-2'>
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className='h-8 w-28 rounded-full' />
              ))}
            </div>
          </div>

          <div className='space-y-2'>
            <Skeleton className='h-5 w-36' />
            <div className='space-y-1'>
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className='h-4 w-3/4' />
              ))}
            </div>
          </div>

          <Separator />

          <div className='space-y-1'>
            <Skeleton className='h-4 w-48' />
            <Skeleton className='h-4 w-40' />
            <Skeleton className='h-4 w-32' />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
