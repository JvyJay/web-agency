import React from 'react';

export default function ProjectInquiry() {
  return (
    <div
      className='relative overflow-hidden bg-no-repeat bg-cover container mx-auto md:p-10 p-4 w-full'
      style={{
        backgroundPosition: '100%',
        height: '400px',
      }}
    >
      <div
        className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-primary'
        // style={{ backgroundColor: '#1FAED0' }}
      >
        <div className='flex justify-center items-center h-full'>
          <div className='flex items-center flex-col text-center text-white px-6 md:px-12'>
            <h1 className='text-3xl font-bold mt-0 mb-6'>
              Do You Have A Project in Mind?
            </h1>
            <h3 className='md:text-2xl text-normal md:w-4/6 font-light mb-4'>
              Duis dolore exercitation occaecat aliqua deserunt aute eu do
              nostrud dolor. Amet excepteur ea anim anim aliqua cupidatat
              mollit. Quis incididunt voluptate et sit enim non minim enim
              aliquip ea Lorem ea sunt.
            </h3>
            <button
              type='button'
              className='inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
            >
              Let`s Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
