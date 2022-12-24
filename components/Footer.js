import React from 'react';

// NEXT COMPONENTS
import Link from 'next/link';

// NEXT COMPONENTS
import Image from 'next/image';

// Images
import img from '../assets/logo_header.png';

export default function Footer() {
  return (
    <div>
      <footer className='text-center lg:text-left bg-gray-100 text-gray-600'>
        <div className='flex justify-center items-center lg:justify-between p-6 border-b border-gray-300'>
          <div className='mr-12 hidden lg:block'>
            <span>Get connected with us on social networks:</span>
          </div>
        </div>
        <div className='mx-6 py-10 text-center md:text-left'>
          <div className='flex flex-row justify-between'>
            <Image src={img} alt='Logo' />
            <div className='flex flex-column gap-4'>
              <div>
                <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
                  Menu
                </h6>
                <p className='mb-4'>
                  <Link href='/about' class='text-gray-600'>
                    Who We Are
                  </Link>
                </p>
                <p className='mb-4'>
                  <Link href='/portfolio' class='text-gray-600'>
                    What We`ve Done
                  </Link>
                </p>
                <p>
                  <Link href='/contact' className='text-gray-600'>
                    Let`s get Started
                  </Link>
                </p>
              </div>
              <div>
                <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
                  Subscribe To Our Newsletter
                </h6>

                <p class='text-gray-500 mb-12'>
                  We will write rarely and only high-quality content.
                </p>

                <div class='md:flex flex-row'>
                  <input
                    type='text'
                    className='form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    placeholder='Enter your email'
                  />
                  <button
                    type='submit'
                    className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center p-6 bg-gray-200'>
          <span>© 2022 Copyright:</span>
          <a
            className='text-gray-600 font-semibold'
            href='https://tailwind-elements.com/'
          >
            Sandcastle Web Design & Development
          </a>
        </div>
      </footer>
    </div>
  );
}
