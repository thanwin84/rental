import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LoadingButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <Button className={`${className}`} disabled>
      <Loader2 className='animate-spin' />
      {text}
    </Button>
  );
}
