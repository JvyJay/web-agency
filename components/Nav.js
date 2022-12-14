// NEXT COMPONENTS
import Link from 'next/link';
import Image from 'next/image';

// IMAGES
import img from '../assets/logo_header.png';

export default function Nav() {
  return (
    <div>
      <Image alt='logo' src={img} />
      <Link href='/'>Home{'    '}</Link>

      <Link href='/about'>About{'    '}</Link>

      <Link href='/portfolio'>Portfolio{'    '}</Link>

      <Link href='/contact'>Contact{'    '}</Link>

      <button
        type='button'
        class='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'
      >
        Contact
      </button>
    </div>
  );
}
