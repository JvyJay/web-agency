import styles from '../styles/Start.module.css';
import { useForm } from 'react-hook-form';
import { Fade, AttentionSeeker } from 'react-awesome-reveal';

// NEXT COMPONENTS
import Image from 'next/image';
// NEXT COMPONENTS

// COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// COMPONENTS

// ICONS
import icon1 from '../assets/phone.svg';
import icon2 from '../assets/email.svg';
import icon3 from '../assets/location.svg';
// ICONS

// IMAGES
import linkedin from '../assets/linkedin2.svg';
import behance from '../assets/behance.svg';
import twitter from '../assets/twitter.svg';
import youtube from '../assets/youtube.svg';
// IMAGES

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='font-montserrat text-neutral-800'>
      <Navbar />
      <Fade>
        <main className='flex justify-center bg-bg'>
          {/* CONTACT FORM SECTION */}
          <div className='container-fluid p-6 rounded-lg shadow-lg bg-white w-4/6 flex flex-col justify-center md:flex-row md:justify-between my-10'>
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='form-group mb-6'>
                <input
                  {...register('name', { required: true })}
                  aria-invalid={errors.name ? 'true' : 'false'}
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
                {errors.name?.type === 'required' && (
                  <AttentionSeeker effect='shake'>
                    <p className='text-rose' role='alert'>
                      Name is Required
                    </p>
                  </AttentionSeeker>
                )}
              </div>
              <div className='form-group mb-6'>
                <input
                  {...register('email', {
                    required: 'Valid Email is required',
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
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
                {errors.email && (
                  <AttentionSeeker effect='shake'>
                    <p className='text-rose' role='alert'>
                      {errors.email?.message}
                    </p>
                  </AttentionSeeker>
                )}
              </div>
              <div className='form-group mb-6'>
                <div className='flex justify-start'>
                  <div className='form-check form-check-inline mx-2'>
                    <input
                      className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
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
                      className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
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
                      className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
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
                  {...register('message', { required: true })}
                  aria-invalid={errors.message ? 'true' : 'false'}
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
                {errors.message?.type === 'required' && (
                  <AttentionSeeker effect='shake'>
                    <p className='text-rose' role='alert'>
                      Message is Required
                    </p>
                  </AttentionSeeker>
                )}
              </div>
              <button
                type='submit'
                className='
      w-full
      px-6
      py-2.5
      bg-primary
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      transition
      duration-150
      ease-in-out'
              >
                Send
              </button>
            </form>
            {/* CONTACT FORM SECTION */}
          </div>
        </main>
      </Fade>
      <Footer />
    </div>
  );
}
