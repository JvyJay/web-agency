import React from 'react';

// NEXT COMPONENTS
import Link from 'next/link';

// NEXT COMPONENTS
import Image from 'next/image';

// Images
import img from '../assets/logo_header.png';

export default function Footer() {
  return (
    <div className='footer-container'>
      <footer>
        {/* LEFT SIDE */}
        <div className='left'>
          <image alt='logo' src={img} />
          <p>
            Esse enim qui tempor anim reprehenderit dolore veniam sint quis
            magna do est nisi.
          </p>
          <div className='social-icons'>
            <image>
              <a>{/* Social Link */}</a>
            </image>
            <image>
              <a>{/* Social Link */}</a>
            </image>
            <image>
              <a>{/* Social Link */}</a>
            </image>
            <image>
              <a>{/* Social Link */}</a>
            </image>
            <image>
              <a>{/* Social Link */}</a>
            </image>
            <image>
              <a>{/* Social Link */}</a>
            </image>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className='right'>
          <div className='bottom-menu'>
            <h6>Menu</h6>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/contact'>Contact</Link>
          </div>
          <div className='newsletter'>
            <h6>Subscribe to Our Newsletter</h6>
            <p>
              Aute nisi veniam culpa cillum qui sint aliqua consectetur laboris
              reprehenderit qui.
            </p>
            <form>
              <input
                class='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'
                type='email'
                name='email'
                placeholder='Enter Your Email'
              />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
