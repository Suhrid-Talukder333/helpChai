import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Logo from '../logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-900">
      <Link
        className="mb-2 flex h-12 items-end justify-center md:justify-center md:items-center rounded-md p-4 md:h-20"
        href="/"
      >
        <div className="w-32 md:h-auto text-white md:w-40">
          <Logo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-900 md:block"></div>
      </div>
    </div>
  );
}
