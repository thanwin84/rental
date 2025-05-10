import { FilterSidebar } from '@/app/(nondashboard)/properties/search/components';
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
        <FilterSidebar className='mt-6' />
        <main className='w-full'>{children}</main>
      </SidebarProvider>
    </div>
  );
}
