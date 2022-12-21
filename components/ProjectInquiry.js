import React from 'react';

// NEXT COMPONENTS
import Image from 'next/image';

// Images
import img from '../assets/Sand2.jpg';

export default function ProjectInquiry() {
  return (
    <div>
      <div
        class='relative overflow-hidden bg-no-repeat bg-cover'
        style={{
          backgroundPosition: '50%',
          backgroundImage: img,
          height: '350px',
        }}
      >
        <div
          class='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75' }}
        >
          <div class='flex justify-center items-center h-full'>
            <div class='text-center text-white px-6 md:px-12'>
              <h1 class='text-5xl font-bold mt-0 mb-6'>
                Do You Have A Project in Mind?
              </h1>
              <h3 class='text-3xl font-bold mb-8'>
                Duis dolore exercitation occaecat aliqua deserunt aute eu do
                nostrud dolor. Amet excepteur ea anim anim aliqua cupidatat
                mollit. Quis incididunt voluptate et sit enim non minim enim
                aliquip ea Lorem ea sunt.
              </h3>
              <button
                type='button'
                class='inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                Let`s Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
