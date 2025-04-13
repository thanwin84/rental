import AppSidebar from '@/components/dashboard/AppSidebar';
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardNavbar />
      <AppSidebar role='tenant' />
      <main className='mt-14 w-full'>{children}</main>
    </SidebarProvider>
  );
}
