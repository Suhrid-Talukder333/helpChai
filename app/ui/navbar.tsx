'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './logo';
import { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'About',
      link: '/about',
    },
    {
      id: 3,
      name: 'Learning',
      link: '/dashboard/learning',
    },
    {
      id: 4,
      name: 'Calculate WQI',
      link: '/dashboard/calculate',
    },
    {
      id: 5,
      name: 'Contact',
      link: '/contact',
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-gray-900`}>
      <div className="w-full">
        <div className="relative mx-4 flex items-center justify-center">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="block w-full py-5">
              <Logo />
            </Link>
          </div>
          <div className="flex w-full items-center justify-center px-4">
            <div>
              <div className={`absolute right-20 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-blue-200 focus:ring-2 lg:hidden`}>
                <Link href="https://www.icccad.net/" target="_blank" className="block">
                  <Image
                    src="/icccad_logo.png"
                    width={30}
                    height={30}
                    alt={'ICCCAD'}
                  />
                </Link>
              </div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-blue-200 focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                style={{ zIndex: 1000 }}
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-gray-600 px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${
                  !open && 'hidden'
                } `}
              >
                <ul className="block lg:flex">
                  {links.map(({ id, link, name }) => (
                    <ListItem key={id} NavLink={link}>
                      {name}
                    </ListItem>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="lg:block items-center justify-center hidden mr-12">
            <Link href="https://www.icccad.net/" target='_blank' className="block">
              <Image
                src="/icccad_logo.png"
                width={80}
                height={80}
                alt={'ICCCAD'}
              />
            </Link>
          </div>
          <div className="lg:block items-center justify-center hidden">
            <Link
              href="/dashboard/calculate"
              className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-500 focus:ring-2 focus:ring-4"
            >
              <SparklesIcon className="w-6" />
              Calculate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ children, NavLink }: { children: any; NavLink: any }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-white hover:text-blue-300 lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default Navbar;
