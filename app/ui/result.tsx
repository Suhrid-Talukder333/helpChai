import Image from 'next/image';
import { ResultType } from '../lib/definitions';
import DynamicHeroIcon from './dynamicHeroIcon';

export default function TypeResultType({ result, standard }: { result: ResultType, standard: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl p-4 m-4">
      <p className='text-center font-bold'>{standard} Standard</p>
      <Image
        className="h-24 md:h-96 md:w-full w-24 rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg m-4"
        src={result.img_url || ""}
        alt={result.result_index || "img"}
        width={300}
        height={300}
        loading='lazy'
      />
      {/* <div className='w-full h-10' style={{backgroundColor: result.color}}></div> */}
      <div className="rounded-lg border border-gray-200 flex flex-col justify-center items-center p-4 leading-normal">
        <p className="mb-2 text-center text-base tracking-tight text-gray-900">
          {result.value}
        </p>
        <DynamicHeroIcon className="h-14 w-14" color={result.color} icon={result.icon} />
        <p className="mb-3 text-1xl md:text-2xl font-bold text-center">
          {result.desc[0]}
        </p>
        <p style={{ textAlignLast: "center" }} className="mb-3 text-base text-justify font-bold text-center text-gray-700">
          {result.desc[1]}
        </p>
      </div>
    </div>
  );
}
