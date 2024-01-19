import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
//import '@/app/ui/logo.css'

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center justify-center leading-none text-white relative`}
    >
      <div className="drop-container">
        <h1 className='logo-text text-blue-400 text-5xl'>Help_Pani</h1>
        <div className="drop"></div>
      </div>
    </div>
  );
}
