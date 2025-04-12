import Logo from '@/components/Logo';
import Link from 'next/link';

const footerData = [
  {
    pathName: 'About Us',
    href: '/about-us',
  },
  {
    pathName: 'Contact Us',
    href: '/contact-us',
  },
  {
    pathName: 'FAQ',
    href: '/faq',
  },
  {
    pathName: 'TERMS',
    href: '/terms',
  },
  {
    pathName: 'Privacy',
    href: '/privacy',
  },
];
export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={`flex flex-col md:flex-row md:justify-between md:px-6 bg-zinc-800 justify-center items-center gap-4 py-4 ${className}`}
    >
      <Logo />
      <ul className="flex gap-2 text-sm">
        {footerData.map((item) => (
          <Link
            className="text-slate-400 hover:text-slate-200"
            key={item.pathName}
            href={item.href}
          >
            {item.pathName}
          </Link>
        ))}
      </ul>
    </footer>
  );
}
