import { Navbar } from '@/components/navbar';
import { ReactNode } from 'react';
import 'leaflet/dist/leaflet.css';

export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
        <Navbar />
      </div>
      <main className='mt-[58px]'>{children}</main>
    </div>
  );
}
