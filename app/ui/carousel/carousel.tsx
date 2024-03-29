'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Transition } from '@headlessui/react';
import DynamicHeroIcon from '../dynamicHeroIcon';
import "@/app/ui/carousel/carousel.css";
import { CarouselItem } from '@/app/lib/definitions';

export default function Carousel({ items }: { items: CarouselItem[] }) {
  const duration: number = 5000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100);
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setProgress(0);
      setActive((active + 1) % items.length);
    }
  };

  return (
    <div className="mx-auto max-w-7xl text-center pt-8 min-h-[550px] md:min-w-[600px]">
      {/* Item image */}
      <div className="transition-all md:min-w-[600px] min-h-[550px] w-full delay-300 duration-150 ease-in-out" >
        <div className="relative min-h-[550px] flex flex-col p-1 w-full md:min-w-[600px]"  ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              className='w-full md:min-w-[600px] min-h-[550px]'
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-100"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 relative hidden"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-100"
            >
              <div className="relative flex w-full min-h-[550px] md:min-w-[600px] rounded-md flex-col md:flex-col justify-center items-center">
                <div className={` w-full md:min-w-[600px] p-4 flex justify-center items-center`}>
                  <Image
                    className=""
                    src={item.img}
                    alt={item.desc}
                    width={300}
                    height={300}
                    placeholder='blur'
                    blurDataURL='https://placehold.co/600x400'
                  />
                </div>
                <div style={{borderColor: item.color}} className={`flex flex-col md:border-l-4 h-full w-full md:min-w-[600px] p-4 relative justify-center items-center`}>
                  <p className='w-full p-2 text-wrap text-base md:text-1xl font-bold ' >
                    {item.text}
                  </p>
                  <p className='w-full p-2 text-wrap text-center text-sm italic text-slate-800' >
                    {item.ref}
                  </p>
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="mx-auto mt-8 grid max-w-xs grid-cols-2 md:min-w-[600px] gap-4 sm:max-w-sm md:max-w-3xl md:grid-cols-4">
        {items.map((item, index) => (
          <span
            key={index}
            className="group rounded p-2 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
            onClick={() => {
              setActive(index);
              setProgress(0);
            }}
          >
            <span
              className={`flex flex-col items-center text-center ${
                active === index
                  ? ''
                  : 'opacity-50 transition-opacity group-hover:opacity-100  group-focus:opacity-100'
              }`}
            >
              <span className="relative mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
                <DynamicHeroIcon color="" className="" icon={item.buttonIcon} />
              </span>
              <span className="mb-2 block text-sm font-medium text-slate-900">
                {item.desc}
              </span>
              <span
                className="relative block h-1 w-full rounded-full bg-slate-200"
                role="progressbar"
                aria-valuenow={active === index ? progress : 0}
              >
                <span
                  className="absolute inset-0 rounded-[inherit] bg-indigo-500"
                  style={{ width: active === index ? `${progress}%` : '0%' }}
                ></span>
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
