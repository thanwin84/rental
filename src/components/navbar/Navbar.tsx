'use client';
import Link from 'next/link';
import Logo from '../Logo';
import { AuthButtons, NavbarDropDownMenu } from '@/components/navbar';
import { useAuthStore } from '@/lib/store/auth';

export default function Navbar() {
  // test
  const isLoggedIn = useAuthStore().isAuthenticated;
  return (
    <nav className='bg-stone-800 h-[58px] flex justify-between items-center px-8'>
      <Link href='/'>
        <Logo />
      </Link>
      <p className='hidden md:block text-slate-300'>
        Discover your rental apartment with our advance search
      </p>
      {isLoggedIn ? <NavbarDropDownMenu /> : <AuthButtons />}
    </nav>
  );
}
