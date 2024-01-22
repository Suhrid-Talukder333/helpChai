import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
//import '@/app/ui/logo.css'

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} relative flex flex-row items-center justify-center leading-none text-white`}
    >
      <Image
        src={'/helpChaiLogo250.png'}
        alt={`Help Chai`}
        className="mr-4 rounded-full"
        width={100}
        height={60}
      />
    </div>
  );
}
