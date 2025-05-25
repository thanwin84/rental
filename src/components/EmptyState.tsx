import { FileX2 } from 'lucide-react';

type EmptyStateProps = {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export default function EmptyState({
  title = 'No Applications Found',
  description = 'You currently have no applications. Please check back later or add a new one.',
  icon,
}: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-center text-stone-500'>
      <div className='mb-4'>
        {icon || <FileX2 className='h-12 w-12 text-stone-400' />}
      </div>
      <h2 className='text-xl font-semibold text-stone-700 dark:text-stone-100'>
        {title}
      </h2>
      <p className='text-sm mt-2 max-w-md'>{description}</p>
    </div>
  );
}
