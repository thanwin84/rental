import Link from 'next/link';
import Logo from '../Logo';
import { AuthButtons, NavbarDropDownMenu } from '@/components/navbar';

export default function Navbar() {
  // test
  const isLoggedIn = true;
  return (
    <nav className='bg-stone-800 h-[58px] flex justify-between items-center px-8'>
      <Link href='/landing'>
        <Logo />
      </Link>
      <p className='hidden md:block text-slate-300'>
        Discover your rental apartment with our advance search
      </p>
      {isLoggedIn ? <NavbarDropDownMenu /> : <AuthButtons />}
    </nav>
  );
}
