import React from 'react';
import Link from 'next/link';

// Images

export default function Footer() {
  return (
    <div className='footer-container'>
      <footer>
        {/* LEFT SIDE */}
        <div className='left'>
          <image alt='logo' />
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
              <input type='email' name='email' placeholder='Enter Your Email' />
              <input type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
