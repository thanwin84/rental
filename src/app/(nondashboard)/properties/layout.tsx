import { SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';
import { InitFavouriteStore } from './InitFavouriteStore';

export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <InitFavouriteStore />
      <SidebarProvider>
        <main className='w-full'>{children}</main>
      </SidebarProvider>
    </div>
  );
}
