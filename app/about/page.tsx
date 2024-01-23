'use client';

import Image from 'next/image';
import React from 'react';
import { TEAM_INFO, TEAM_LEADER_INFO } from '../lib/utils';
import Link from 'next/link';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const Page = () => {
  return (
    <>
      <section className="overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="aboutBackground w-full px-4 lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div
                    style={{
                      backgroundColor: '#D9AFD9',
                      backgroundImage:
                        'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
                      border: '1px solid white',
                      borderRadius: '5px',
                    }}
                    className="py-3 sm:py-4"
                  >
                    <Image
                      src="/aboutus1.png"
                      alt=""
                      className="w-full rounded-2xl"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: '#FBAB7E',
                      backgroundImage:
                        'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
                      border: '1px solid white',
                      borderRadius: '5px',
                    }}
                    className="py-3 sm:py-4"
                  >
                    <Image
                      src="/aboutus2.png"
                      alt=""
                      className="w-full rounded-2xl"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: '#FBDA61',
                    backgroundImage:
                      'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
                    border: '1px solid white',
                    borderRadius: '5px',
                  }}
                  className="w-full px-3 sm:px-4 xl:w-1/2"
                >
                  <div className="relative z-10 my-4">
                    <Image
                      src="/aboutus3.png"
                      alt=""
                      className="w-full rounded-2xl"
                      width={300}
                      height={300}
                    />
                    <span className="absolute -bottom-7 -right-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 p-5  lg:mt-0">
                <span className="mb-4 block rounded border-2 border-blue-800 p-4 text-center text-3xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                  About{' '}
                  <strong className="text-bold text-green-300">Help</strong>
                  <strong className="text-bold text-blue-300">Chai</strong>
                </span>
                <h2 className="text-1xl text-dark mb-5 text-center font-bold text-gray-700 sm:text-[40px]/[48px] md:text-start md:text-3xl">
                  Empowering Communities for Climate Resilience and Water Purity
                </h2>
                {/* <p className="mb-5 text-center text-justify text-base sm:text-xl md:text-start">
                  Welcome to our ongoing research project
                  <br />{' '}
                  <strong className="font-bold">
                    Capacity Building of Youth to Improve Drinking Water
                    Security and Climate Resilience through Youth-led
                    Participatory Sensing (YPS) Model in Hatiya Island,
                    Noakhali.
                  </strong>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 py-8 sm:py-16 lg:px-6">
          <div className="mb-4 max-w-screen-xl text-center lg:mb-16">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
              Capacity Building of Youth to Improve Drinking Water Security and
              Climate Resilience through Youth-led Participatory Sensing (YPS)
              Model in Hatiya Island, Noakhali.
            </h2>
            <p className="text-gray-500 sm:text-xl"></p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-[300px]"
              src="/images/planet.jpg"
              alt="EC"
              width={585}
              height={420}
            />
            <Link
              href="https://www.vecteezy.com/vector-art/2452805-globe-map-world"
              className="text-grey-400 text-center text-base"
            >
              Globe map world Free Vector, Author Giuseppe Ramos
            </Link>
          </div>
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 mt-8 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl">
              The Global Water Challenge
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500 md:text-lg">
              Water, vital for civilization and ecosystems, constitutes 71% of
              the world, with only 2.5% as freshwater. Climate change,
              disasters, and extreme events challenge our existence. Globally,
              water security faces a crucial need for quantity and quality. IPCC
              warns 25% may face water scarcity by 2050. In the southwest
              coastal zone of Bangladesh, freshwater river area is projected to
              decrease from 40.8% to 17.1% between 2012 and 2050
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/bdmap.png"
              alt="EC"
              width={585}
              height={420}
            />
            <Link
              href="https://freevectormaps.com/bangladesh/BD-EPS-02-4001?ref=atr"
              className="text-grey-400 text-center text-base"
            >
              Vector Flag of Bangladesh
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight text-gray-900 md:text-end md:text-4xl ">
              Bangladesh&lsquo;s Water Reality
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500  md:text-lg">
              Bangladesh grapples with safe freshwater scarcity, causing a high
              waterborne disease rate. The government addresses climate change
              impacts by investing in nature-based solutions, enhancing
              watersheds, and improving waterways for groundwater recharge. In
              2018, 50 million people faced arsenic exposure from contaminated
              tube well water.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="order-last flex w-full flex-col items-center justify-center">
            <Image
              className="w-full"
              src="/images/global_warming.jpg"
              alt="EC"
              width={585}
              height={420}
            />
            <Link
              href="https://www.vecteezy.com/vector-art/11455662-climate-change-industry"
              className="text-grey-400 text-center text-base"
            >
              Vector of Global Warming, Author Jheny Neriza Amanda
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight text-gray-900 md:text-end md:text-4xl ">
              Impact of Climate Change
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500 md:text-lg">
              Ensuring sustainable safe drinking-water faces risk without
              resilient water supply systems. Climate change&lsquo;s impact on
              weather events, such as floods or droughts, stresses freshwater
              resources, jeopardizing water safety and security. To address
              these challenges, enhancing the climate resilience of water supply
              services is crucial in the face of anticipated climate change
              impacts (WHO, 2017)
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              className="w-[600px]"
              src="/images/goal.png"
              alt="EC"
              width={585}
              height={420}
            />
          </div>
          <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl">
              Goal And Objective
            </h2>
          </div>
          <div className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16">
            <div>
              <div className="mb-10">
                <h3 className="mb-4 flex flex-col items-center text-lg font-medium text-gray-900">
                  <CheckBadgeIcon className="h-14 w-14" />
                  Prioritize water quality alongside quantity in developing
                  countries for enhanced public health.
                </h3>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 flex flex-col items-center text-lg font-medium text-gray-900">
                  <CheckBadgeIcon className="h-14 w-14" />
                  Overcome the challenge of insufficient data on water supply
                  and quality, enabling effective analysis and action.
                </h3>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 flex flex-col items-center text-lg font-medium text-gray-900">
                  <CheckBadgeIcon className="h-14 w-14" />
                  Bridge communication gaps among water supply entities,
                  communities, and decision-makers.
                </h3>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="mb-4 flex flex-col items-center text-lg font-medium text-gray-900">
                  <CheckBadgeIcon className="h-14 w-14" />
                  Provide vital information to youth on water supply, quality,
                  sanitation, hygiene, and the climate crisis.
                </h3>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 flex flex-col items-center text-lg font-medium text-gray-900">
                  <CheckBadgeIcon className="h-14 w-14" />
                  Address knowledge gaps during critical situations like
                  pandemics through evidence-informed decision-making.
                </h3>
              </div>
              <div className="mb-10">
                <h3 className="mb-4 flex flex-col items-center text-lg font-medium text-gray-900">
                  <CheckBadgeIcon className="h-14 w-14" />
                  Scale and advance tools through the &lsquo;HelpChai&lsquo; app
                  and website to tackle water supply and quality monitoring
                  challenges.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <div className="order-last flex w-full flex-col items-center justify-center">
            <svg
              className="text-primary-600 h-40 w-40 lg:h-80 lg:w-80 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight text-gray-900 md:text-end md:text-4xl ">
              Expected Results
            </h2>
            <p className="mb-6 text-justify font-light text-gray-500 md:text-lg">
              This research leverages ICTs to bridge communication gaps on water
              supply and quality, benefiting local to national stakeholders.
              Developing countries face challenges in effectively communicating
              drinking water quality data for timely decision-making. By
              empowering youth (high school to university level) in
              understanding and utilizing ICTs for water supply and quality
              monitoring, we aim to ensure sustainable development in the
              sector, fostering &lsquo;Drinking Water Security&lsquo; and paving
              the way for future innovations and technologies
            </p>
            <p className="ribbon">
              <span className="text">
                <strong className="bold">#climatechange </strong>
              </span>
            </p>
            <p className="ribbon">
              <span className="text">
                <strong className="bold">#youthaction</strong>
              </span>
            </p>
            <p className="ribbon">
              <span className="text">
                <strong className="bold">#SDGs</strong>
              </span>
            </p>
            <p className="ribbon">
              <span className="text">
                <strong className="bold">#SustainableFuture</strong>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center px-4 py-8 sm:py-16 lg:px-6">
          <div className="mb-8 max-w-screen-md text-center lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">
              In The End
            </h2>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Empowering Volunteers</h3>
              <p className="text-gray-500">
                Our volunteers are provided with adequate training and tools for
                field activities including climate hazard analysis, data
                collection, reporting and dissemination.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Building Capacity</h3>
              <p className="text-gray-500">
                Volunteer and selected schools can support as resource center
                for the expansion of the concept and replication.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-primary-100 mb-4 flex h-10 w-10 items-center justify-center rounded-full lg:h-12 lg:w-12">
                <svg
                  className="text-primary-600 dark:text-primary-300 h-5 w-5 lg:h-6 lg:w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Climate-Ready Innovations
              </h3>
              <p className="text-gray-500">
                Relevant features regarding climate resilient actions will be
                incorporated in both HelpChai app and website for systematic
                data management portal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              The Team
            </h2>
            <p
              style={{ textAlignLast: 'center' }}
              className="text-justify font-light text-gray-500 sm:text-xl"
            >
              Our diverse range of dedicated persons.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-16">
            {TEAM_LEADER_INFO.map((item: any, index: number) => {
              return (
                <div key={index} className="text-center text-gray-500">
                  <Image
                    className="mx-auto mb-4 h-36 w-36 rounded-full"
                    src="/avatar.png"
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                    <a href="#">{item.name}</a>
                  </h3>
                  <p>{item.pos_title}</p>
                  <ul className="mt-4 flex justify-center space-x-4">
                    <li>
                      <a
                        href={item.fb_url}
                        className="text-[#39569c] hover:text-gray-900"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-16">
            {TEAM_INFO.map((item: any, index: number) => {
              return (
                <div key={index} className="text-center text-gray-500">
                  <Image
                    className="mx-auto mb-4 h-36 w-36 rounded-full"
                    src="/avatar.png"
                    alt={item.name}
                    width={100}
                    height={100}
                  />
                  <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                    <a href="#">{item.name}</a>
                  </h3>
                  <p>{item.pos_title}</p>
                  <ul className="mt-4 flex justify-center space-x-4">
                    <li>
                      <a
                        href={item.fb_url}
                        className="text-[#39569c] hover:text-gray-900"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
