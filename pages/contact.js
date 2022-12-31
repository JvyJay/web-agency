import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Start.module.css';
import Image from 'next/image';

// ICONS
import icon1 from '../assets/phone.svg';
import icon2 from '../assets/email.svg';
import icon3 from '../assets/location.svg';
// ICONS

// IMAGES
import img from '../assets/logo_header.png';
import linkedin from '../assets/linkedin2.svg';
import behance from '../assets/behance.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
// IMAGES

export default function contact() {
  return (
    <div className='font-montserrat text-neutral-800'>
      <Navbar />
      <main className='flex justify-center'>
        {/* CONTACT FORM SECTION */}
        <div className='container-fluid p-6 rounded-lg shadow-lg bg-white w-4/6 flex flex-row justify-between my-10'>
          <div className='flex flex-col justify-between flex-start'>
            <div className='p-6'>
              <h1 className='text-3xl font-bold mb-5'>
                Now Start Your Project
              </h1>
              <p className='mb-5'>
                Id deserunt cillum nostrud incididunt laboris amet quis.
              </p>
              <ul>
                <li className='flex flex-row mb-4'>
                  <Image className='mr-2' alt='Phone' src={icon1} />
                  206.325.5383
                </li>
                <li className='flex flex-row mb-4'>
                  <Image className='mr-2' alt='Email' src={icon2} />
                  info@sandcastle-web.com
                </li>
                <li className='flex flex-row mb-4'>
                  <Image className='mr-2' alt='Location' src={icon3} />
                  Seattle, WA
                </li>
              </ul>
            </div>
            <ul className='flex flex-row p-6'>
              <li className='mr-2'>
                <a>
                  <Image src={linkedin} alt='LinkedIn' />
                </a>
              </li>
              <li className='mr-2'>
                <a>
                  <Image src={behance} alt='Behance' />
                </a>
              </li>
              <li className='mr-2'>
                <a>
                  <Image src={twitter} alt='Twitter' />
                </a>
              </li>
              <li className='mr-2'>
                <a>
                  <Image src={youtube} alt='YouTube' />
                </a>
              </li>
            </ul>
          </div>
          <form>
            <div className='form-group mb-6'>
              <input
                type='text'
                className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInput7'
                placeholder='Name'
              />
            </div>
            <div className='form-group mb-6'>
              <input
                type='email'
                className='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInput8'
                placeholder='Email address'
              />
            </div>
            <div className='form-group mb-6'>
              <div className='flex justify-start'>
                <div className='form-check form-check-inline mx-2'>
                  <input
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value='option1'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800'
                    for='inlineCheckbox1'
                  >
                    Webflow
                  </label>
                </div>
                <div className='form-check form-check-inline mx-2'>
                  <input
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='option2'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800'
                    for='inlineCheckbox2'
                  >
                    UI/UX Design
                  </label>
                </div>
                <div className='form-check form-check-inline mx-2'>
                  <input
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='option2'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800'
                    for='inlineCheckbox2'
                  >
                    SEO
                  </label>
                </div>
              </div>
            </div>
            <div className='form-group mb-6'>
              <textarea
                className='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
                id='exampleFormControlTextarea13'
                rows='3'
                placeholder='Message'
              ></textarea>
            </div>
            <button
              type='submit'
              className='
      w-full
      px-6
      py-2.5
      bg-blue-400
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-500 hover:shadow-lg
      focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-600 active:shadow-lg
      transition
      duration-150
      ease-in-out'
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
