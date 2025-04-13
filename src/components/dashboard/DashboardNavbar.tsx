'use client';
import { Navbar } from '../navbar';
import { useSidebar } from '../ui/sidebar';

export default function DashboardNavbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <Navbar onMenuClick={toggleSidebar} />
    </div>
  );
}
