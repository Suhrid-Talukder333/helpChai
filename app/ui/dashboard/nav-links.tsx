'use client';
import {
  SparklesIcon,
  HomeIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Learning',
    href: '/dashboard/learning',
    icon: BookOpenIcon,
  },
  { name: 'Calculate WQI', href: '/dashboard/calculate', icon: SparklesIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-white hover:bg-sky-100 hover:text-blue-600 sm:border-2 sm:border-white md:flex-none md:justify-start md:border-none md:p-2 md:px-3',
              {
                'text-black bg-sky-100': pathname === link.href,
              },
            )}
          >
            <LinkIcon className={clsx('w-6', {
                'text-black': pathname === link.href,
              })} />
            <p
              className={clsx('hidden md:block', {
                'text-black': pathname === link.href,
              })}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
