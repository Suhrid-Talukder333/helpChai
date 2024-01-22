import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0"
          >
            <Image
              src="/helpChaiLogo.png"
              className=""
              alt="HelpChai Logo"
              width={80}
              height={80}
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
              HelpChai
            </span>
          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 text-gray-400 sm:mb-0">
            <li>
              <a href="/about" className="me-4 hover:underline md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 text-gray-400 sm:text-center">
          © 2023{' '}
          <a href="/" className="hover:underline">
            HelpChai™
          </a>
          . Made with &hearts;
        </span>
      </div>
    </footer>
  );
}
