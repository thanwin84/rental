'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { logout } from '@/app/actions';
import { useAuthStore } from '@/lib/store/auth';

type Props = {
  className?: string;
};

const links: { pathName: string; path?: string }[] = [
  {
    pathName: 'My Dashboard',
    path: '/dashboard',
  },
  {
    pathName: 'Setting',
    path: '/',
  },
  {
    pathName: 'Logout',
  },
];

export default function NavbarDropDownMenu({ className }: Props) {
  const router = useRouter();
  const authStore = useAuthStore();

  async function handleLogout() {
    try {
      await logout();
      authStore.logout();
      toast.success("You've logged out successfully");
      router.push('/login');
    } catch {
      toast.error('Something went wrong while logout');
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center cursor-pointer gap-3 px-3 py-2 rounded-md hover:bg-stone-700 transition-colors ${className}`}
      >
        <Avatar className='h-9 w-9 border border-slate-700'>
          <AvatarImage src={''} alt='User Avatar' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className='flex flex-col text-left'>
          <span className='text-slate-100 font-medium text-sm'>
            {'Than Win Hline'}
          </span>
          <span className='text-slate-400 text-xs'>{'Renters'}</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48 mt-2 rounded-md bg-stone-800 shadow-lg px-2 py-4'>
        {links.map((link) => {
          if (link.pathName === 'Logout') {
            return (
              <DropdownMenuLabel
                className='text-center px-3 py-2 text-slate-200  hover:bg-stone-700 rounded-md cursor-pointer transition-colors'
                key={link.pathName}
                onClick={handleLogout}
              >
                Logout
              </DropdownMenuLabel>
            );
          }
          return (
            <Link key={link.pathName} href={link.path as string}>
              <DropdownMenuLabel
                key={link.pathName}
                className='text-center px-3 py-2 text-slate-200 hover:bg-stone-700 rounded-md cursor-pointer transition-colors'
              >
                {link.pathName}
              </DropdownMenuLabel>
            </Link>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
