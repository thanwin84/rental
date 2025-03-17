import { Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LoadingButton({ text }: { text: string }) {
  return (
    <Button className="w-full" disabled>
      <Loader2 className="animate-spin" />
      {text}
    </Button>
  );
}
