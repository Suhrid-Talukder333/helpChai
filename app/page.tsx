import Logo from '@/app/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Blob } from '@/app/ui/blob';
import Navbar from './ui/navbar';

export default function Page() {
  return (
    <div className="h-full w-full">
      <section className="h-full w-full relative">
        <Navbar />
        <div className=" flex min-h-screen flex-col p-6">
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <Blob />
            <div className="secondary-text absolute bottom-0 flex items-center justify-center text-center">
              <p style={{ color: '#003459' }} className="text-1xl md:text-3xl">
                Keep it pure, drink secure.
              </p>
            </div>
          </div>
        </div>
        <Link href="#preview">
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </Link>
      </section>
      <section id="preview" className="h-full w-full">
        <div className=" flex min-h-screen flex-col p-6">
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <Blob />
            <div className="absolute bottom-0 flex items-center justify-center text-center">
              <p style={{ color: '#003459' }} className="text-1xl md:text-3xl">
                Keep it pure, drink secure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
