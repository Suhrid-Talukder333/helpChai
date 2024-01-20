'use client';
  
import Logo from '@/app/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { Blob } from '@/app/ui/blob';
import Navbar from './ui/navbar';
import Carousel from './ui/carousel/carousel';
import { carouselItems } from './lib/utils';

export default function Page() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <section className="relative h-full w-full">
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
      <section id="preview" className="relative min-h-screen w-full">
        <Carousel items={carouselItems} />
      </section>
      <div className='flex h-full w-full justify-center items-center bg-blue-400 md:p-4 my-10'>
        <p className='text-center text-white text-2xl md:text-3xl px-5 py-[80px] md:py-8'>
          <strong className='text-green-300 text-bold'>Help</strong> <strong className='text-blue-300 text-bold'>Pani</strong> is a research-driven initiative committed to closing the
          information gap between water utilities and communities regarding
          water supply and quality. With the youth at the forefront and
          leveraging cutting-edge ICTs, we aim to navigate the path towards
          policy makers, facilitating evidence-informed decision-making for a
          sustainable water future.
        </p>
      </div>
    </div>
  );
}
