import Image from 'next/image';
import { ResultType } from '../lib/definitions';

export default function TypeResultType({ result }: { result: ResultType | null }) {
  console.log(result)
  return (
    <div className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row ">
      <Image
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/helpPaniLogo.png"
        alt=""
        width={100}
        height={100}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-2 text-center text-base tracking-tight text-gray-900">
          {result?.value}
        </p>
        <p className="mb-3 text-2xl font-bold text-gray-700">
          {result?.desc}
        </p>
      </div>
    </div>
  );
}
