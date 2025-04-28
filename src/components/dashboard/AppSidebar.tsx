'use client';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '../ui/sidebar';
import { Building, Settings, FileText, Heart, House } from 'lucide-react';

const managerNavlinks = [
  {
    label: 'Properties',
    icon: Building,
    href: '/manager/dashboard/properties',
  },
  {
    label: 'Setting',
    icon: Settings,
    href: '/manager/dashboard/settings',
  },
  {
    label: 'Applications',
    icon: FileText,
    href: '/manager/dashboard/applications',
  },
];
const tanentsNavlinks = [
  {
    label: 'Favourites',
    icon: Heart,
    href: '/renter/dashboard/favourites',
  },
  {
    label: 'Applications',
    icon: FileText,
    href: '/renter/dashboard/applications',
  },
  {
    label: 'Residences',
    icon: House,
    href: '/renter/dashboard/residences',
  },
  {
    label: 'Setting',
    icon: Settings,
    href: '/renter/dashboard/settings',
  },
];
export default function AppSidebar({ role }: { role: 'tenant' | 'manager' }) {
  const navlinks = role === 'manager' ? managerNavlinks : tanentsNavlinks;
  const { state } = useSidebar();
  return (
    <Sidebar className='top-14' collapsible='icon'>
      <SidebarHeader className='bg-stone-900 flex py-2'>
        <SidebarTrigger className='self-end text-slate-200 cursor-pointer' />
      </SidebarHeader>
      <SidebarContent className='bg-stone-900'>
        <SidebarMenu className=' mt-12'>
          {navlinks.map((navlink) => (
            <SidebarMenuItem key={navlink.label}>
              <Link
                className={`flex  items-center gap-2 ${
                  state === 'expanded' ? 'px-3' : 'px-1 justify-center'
                } py-3  text-slate-100 hover:bg-stone-700 rounded-md transition-colors`}
                href={navlink.href}
              >
                {<navlink.icon />}
                {state === 'expanded' && <span>{navlink.label}</span>}
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
