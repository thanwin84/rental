import { ReactNode } from 'react';

export default function NonDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
