// NEXT COMPONENTS
import Link from 'next/link';
import Image from 'next/image';

// IMAGES
import img from '../assets/logo_header.png';

export default function Nav() {
  return (
    <div>
      <nav class='relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg'>
        <div class='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
          <div class='container-fluid'>
            <div class='flex items-center mt-2 lg:mt-0 mr-1' href='#'>
              <Link href='/'>
                <Image src={img} alt='' loading='lazy' />
              </Link>
            </div>
          </div>
          <div class='flex relative'>
            <ul class='navbar-nav flex flex-row pl-0 list-style-none mr-auto right-0 items-center content-center justify-self-center'>
              <li class='nav-item px-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/about'>Who We Are{'    '}</Link>
              </li>
              <li class='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/portfolio'>What We`ve Done{'    '}</Link>
              </li>
              <li class='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/contact'>Let`s Get Started{'    '}</Link>
              </li>
              <li class='nav-item'>
                <button
                  type='button'
                  class='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
