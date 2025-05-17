import { SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';

export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <SidebarProvider>
        <main className='w-full'>{children}</main>
      </SidebarProvider>
    </div>
  );
}
