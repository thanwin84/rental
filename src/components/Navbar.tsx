import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="bg-zinc-800 h-[54px] flex justify-between items-center px-8">
      <Link href="/landing">
        <Logo />
      </Link>
      <p className="hidden md:block text-slate-300">
        Discover your rental apartment with our advance search
      </p>
      <div className="flex gap-4">
        <Link href="/login">
          <Button
            className="cursor-pointer bg-transparent text-slate-200"
            variant="outline"
          >
            Sign in
          </Button>
        </Link>
        <Link href="/signup">
          <Button className="cursor-pointer bg-red-400 hover:bg-red-500">
            Sign Up
          </Button>
        </Link>
      </div>
    </nav>
  );
}
