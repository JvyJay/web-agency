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
    </div>
  );
}
