import Navbar from '@/components/navbar/Navbar';
import { ReactNode } from 'react';

export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
