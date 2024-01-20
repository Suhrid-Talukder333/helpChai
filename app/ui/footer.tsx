import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <Image
              src="/helpPaniLogo.png"
              className=""
              alt="Flowbite Logo"
              width={80}
              height={80}
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Help-Pani
            </span>
          </Link>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link href="/about" className="me-4 hover:underline md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            Help Pani™
          </Link>
          . Made with &hearts;
        </span>
      </div>
    </footer>
  );
}
