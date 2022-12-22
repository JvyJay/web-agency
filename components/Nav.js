// NEXT COMPONENTS
import Link from 'next/link';
import Image from 'next/image';

// IMAGES
import img from '../assets/logo_header.png';

export default function Nav() {
  return (
    <div>
      <nav className='relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg'>
        <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
          <div className='container-fluid'>
            <div className='flex items-center mt-2 lg:mt-0 mr-1' href='#'>
              <Link href='/'>
                <Image src={img} alt='' loading='lazy' />
              </Link>
            </div>
          </div>
          <div className='flex relative'>
            <ul className='navbar-nav flex flex-row pl-0 list-style-none mr-auto right-0 items-center content-center justify-self-center'>
              <li className='nav-item px-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/about'>Who We Are{'    '}</Link>
              </li>
              <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/portfolio'>What We`ve Done{'    '}</Link>
              </li>
              <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
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
      </nav>
    </div>
  );
}
