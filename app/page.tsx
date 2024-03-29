'use client';

import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { Blob } from '@/app/ui/blob';
import Navbar from './ui/navbar';
import Carousel from './ui/carousel/carousel';
import { carouselItems } from './lib/utils';
import React, { useRef } from 'react';

export default function Page() {
  const scollToRef = useRef<HTMLElement>(null);
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
        <ArrowDownIcon
          onClick={() =>
            scollToRef?.current && scollToRef?.current.scrollIntoView()
          }
          className="arrows cursor-pointer"
        />
      </section>
      <section ref={scollToRef} className="bg-white ">
        <div className="mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Carousel items={carouselItems} />
          </div>
          <div className="order-first mt-4 md:mt-0">
            <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight text-gray-900 md:text-center md:text-4xl ">
              <strong className="text-bold text-green-300">Help</strong>
              <strong className="text-bold text-blue-300">Chai</strong>
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500 md:text-2xl">
              a research-driven initiative committed to bridging the information
              gap between water utilities and communities on water supply and
              quality. With a focus on youth empowerment and the use of
              cutting-edge ICTs, we navigate towards policy makers, fostering
              evidence-informed decision-making for a sustainable water future.
              Join us in our project <strong className='font-bold'>&lsquo;Capacity Building of Youth to Improve
              Drinking Water Security and Climate Resilience through Youth-led
              Participatory Sensing (YPS) Model in Hatiya Island,
              Noakhali.&lsquo; </strong>Together, we create a wave of positive change for
              a resilient and secure water ecosystem.
            </p>
          </div>
        </div>
      </section>
      <div className="mt-10 flex h-full w-full items-center justify-center bg-blue-400 md:p-4">
        <p className=" px-5 py-[80px] text-center text-2xl text-white md:py-8 md:text-3xl">
          Empowering Youth <br/> Ensuring Water Security
        </p>
      </div>
      <section className="m-8 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <h2 className="mb-8 text-center text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:mb-16">
            Supported By
          </h2>
          <div className="grid- grid grid-flow-row gap-8 text-gray-500 sm:gap-12 md:grid-cols-3">
            <a href="http://iub.ac.bd/" target="_blank" className="flex items-center justify-center">
              <svg
                width="150"
                height="150"
                viewBox="0 0 42 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_603_1681)">
                  <path
                    d="M41.0395 80.0234H2.06583V82.5H41.0395V80.0234Z"
                    fill="#636466"
                  />
                  <path
                    d="M6.21125 66.135H2.93488V78.1042H6.21125V66.135Z"
                    fill="#636466"
                  />
                  <path
                    d="M23.6132 73.9074C23.6132 77.0689 21.1181 78.4147 17.1402 78.4147C15.7133 78.4147 13.5609 78.144 12.1499 76.9654C11.3049 76.2407 10.9781 75.2691 10.9382 74.0746V66.135H14.2704V73.8994C14.2704 75.5638 15.5379 76.2885 17.0844 76.2885C19.3404 76.2885 20.2571 75.4682 20.2571 74.0109V66.127H23.6132V73.9074Z"
                    fill="#636466"
                  />
                  <path
                    d="M31.7444 72.8323H35.9136C37.1014 72.8323 38.2732 73.2385 38.2732 74.2737C38.2732 75.5001 37.3644 76.0177 35.7542 76.0177H31.7444V72.8323ZM28.5796 78.1042H35.244C38.4645 78.1042 39.3016 77.6901 40.2104 77.0211C41.0394 76.408 41.5496 75.5081 41.5496 74.5525C41.5496 73.3659 41.0554 72.2032 39.1342 71.6537C39.7799 71.4148 41.0554 70.929 41.0554 69.2089C41.0554 67.9746 40.0748 66.135 36.2165 66.135H28.5796V78.1042ZM31.7444 68.1976H35.507C36.9898 68.1976 37.9065 68.5002 37.9065 69.4797C37.9065 70.4194 36.8782 70.8096 35.5868 70.8096H31.7444V68.1976Z"
                    fill="#636466"
                  />
                  <path
                    d="M19.0214 48.2967L0.455322 36.7815V48.1374L19.0214 59.6607V48.2967Z"
                    fill="#2E3192"
                  />
                  <path
                    d="M40.8483 30.2195L22.2902 44.1557V55.878L40.8483 42.3639V30.2195Z"
                    fill="#F7941D"
                  />
                  <path
                    d="M12.8674 2.9046C11.0498 1.08096 9.61492 0.419983 9.61492 0.419983V1.09688C9.61492 1.09688 12.5086 3.58946 12.5086 8.12867C12.5086 15.694 6.64944 18.5768 6.64944 28.133C6.64944 41.7586 20.305 45.3741 20.305 45.3741V21.8339C20.4086 11.9751 15.8887 5.95463 12.8674 2.9046ZM15.8089 40.811C15.8089 40.811 8.64237 38.7643 8.64237 28.5471C8.64237 16.6656 14.4458 17.3425 13.8559 9.46654C13.8559 9.46654 16.6539 11.4893 16.6539 15.2242C16.6539 18.9431 13.4971 20.1536 13.4971 29.8771C13.4971 39.6085 15.8089 40.811 15.8089 40.811Z"
                    fill="#812990"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_603_1681">
                    <rect width="42" height="82" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.swedenabroad.se/en/embassies/bangladesh-dhaka/" target="_blank" className="flex items-center justify-center">
              <Image
                src="/ebssaySwedendhaka.png"
                width={200}
                height={200}
                alt="embassy of sweden, dhaka"
              />
            </a>
            <a href="https://www.icccad.net/" target="_blank" className="flex items-center justify-center">
              <Image
                src="/icccad_logo.png"
                width={150}
                height={150}
                alt="icccad"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="m-8 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <h2 className="mb-5 text-center text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl lg:mb-8">
            Organizing Partner
          </h2>
          <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-1 lg:px-6 xl:gap-16">
            <div className="flex w-full flex-col items-center justify-center">
              <Image
                className="mb-8 w-[300px]"
                src="/nstu_logo.jpg"
                alt="ph scale"
                width={300}
                height={300}
              />
              <Link
                href="/nstu_logo.jpg"
                className="w-42 text-grey-400 text-center text-base md:text-2xl"
              >
                Department of Oceanography
                <br />
                Noakhali Science and Technology University, Noakhali- 3814,
                Bangladesh
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#89ABE3FF] py-16">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/team.png"
              alt="ph scale"
              width={585}
              height={420}
            />
          </div>
          <div className="mt-4 md:mt-0 order-first" >
            <h2 className="mb-4 break-all text-center md:text-start md:text-justify text-2xl md:text-4xl text-center font-extrabold tracking-tight text-gray-900 ">
            Youth-led Water Security<br/> and <br/>Climate Resilience in <br/>Hatiya Island, Noakhali
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
