// NEXT COMPONENTS
import Link from 'next/link';
import Image from 'next/image';

// IMAGES
import img from '../assets/logo_header.png';

export default function Nav() {
  return (
    <div>
      <nav className='relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
          {/* <div className='container-fluid'>
            <div className='flex items-center mt-2 lg:mt-0 mr-1' href='#'>
              <Link href='/'>
                <Image src={img} alt='Logo' loading='lazy' />
              </Link>
            </div>
          </div> */}
          <div className='flex relative'>
            <button
              className='
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    '
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bars'
                className='w-6'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
                ></path>
              </svg>
            </button>
            <div
              className='collapse navbar-collapse flex-grow items-center'
              id='navbarSupportedContent'
            >
              <Link href='/'>
                <Image src={img} alt='Logo' loading='lazy' />
              </Link>
              <ul className='navbar-nav flex flex-row pl-0 list-style-none mr-auto right-0 items-center content-center justify-self-center'>
                <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                  <Link href='/'>Home{'    '}</Link>
                </li>
                <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                  <Link href='/about'>About{'    '}</Link>
                </li>
                <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                  <Link href='/portfolio'>Portfolio{'    '}</Link>
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
            {/* <ul className='navbar-nav flex flex-row pl-0 list-style-none mr-auto right-0 items-center content-center justify-self-center'>
              <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/'>Home{'    '}</Link>
              </li>
              <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/about'>About{'    '}</Link>
              </li>
              <li className='nav-item pr-5 hover:text-blue-500 focus:text-blue-500'>
                <Link href='/portfolio'>Portfolio{'    '}</Link>
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
            </ul> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
