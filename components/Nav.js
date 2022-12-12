import Link from 'next/link';

export default function Nav() {
  return (
    <div>
      <Link href='/'>Home{'    '}</Link>

      <Link href='/about'>About{'    '}</Link>

      <Link href='/portfolio'>Portfolio{'    '}</Link>

      <Link href='/contact'>Contact{'    '}</Link>
    </div>
  );
}
