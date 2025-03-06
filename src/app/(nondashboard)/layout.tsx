import Navbar from '@/components/Navbar';
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
