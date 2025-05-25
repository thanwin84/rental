'use client';
import Link from 'next/link';
import Logo from '../Logo';
import { AlignRight } from 'lucide-react';

import { AuthButtons, NavbarDropDownMenu } from '@/components/navbar';
import { useAuthStore } from '@/lib/store/auth';
import { usePathname } from 'next/navigation';

export default function Navbar({ onMenuClick }: { onMenuClick?: () => void }) {
  const isLoggedIn = useAuthStore().isAuthenticated;
  const location = usePathname();
  const editPage = location.includes('/edit');
  const isDashboard = location.includes('/dashboard');

  return (
    <nav className='bg-stone-900 h-[58px] flex justify-between items-center px-8'>
      <Link className='hidden lg:block' href='/'>
        <Logo />
      </Link>
      <button
        onClick={onMenuClick}
        className='lg:hidden text-slate-200 cursor-pointer'
      >
        <AlignRight />
      </button>
      {isDashboard || editPage ? null : (
        <p className='hidden md:block text-slate-300'>
          Discover your rental apartment with our advance search
        </p>
      )}
      {isLoggedIn ? <NavbarDropDownMenu /> : <AuthButtons />}
    </nav>
  );
}
