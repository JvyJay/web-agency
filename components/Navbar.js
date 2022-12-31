import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// IMAGES
import img from '../assets/logo_header.png';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className='w-full bg-white shadow'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Link href='/'>
              <Image src={img} alt='Logo' loading='lazy' />
            </Link>
            <div className='md:hidden'>
              <button
                className='p-2 text-blue-400 rounded-md outline-none focus:border-blue-400 focus:border'
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-blue-400'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-blue-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/'>Home{'    '}</Link>
              </li>
              <li className='pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/about'>About{'    '}</Link>
              </li>
              <li className='pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/portfolio'>Portfolio{'    '}</Link>
              </li>
              <li className='pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/contact'>Let`s Get Started{'    '}</Link>
              </li>
              <li className='nav-item'>
                <button
                  type='button'
                  className='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
