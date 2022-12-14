import React from 'react';

//NEXT COMPONENTS
import Image from 'next/image';
//NEXT COMPONENTS

export default function PortfolioCard(props) {
  return (
    <div>
      <div className='flex justify-center flex-col text-center m-5 rounded-lg shadow-lg bg-white max-w-sm'>
        <a href='#!' className='h-40 bg-cover overflow-hidden'>
          <Image
            className='rounded-t-lg w-full'
            src={props.img}
            alt='Portfolio Image'
          />
        </a>
        <div className='p-6'>
          <h5 className='text-gray-900 text-xl font-medium mb-2'>
            {props.title}
          </h5>
          <p className='text-gray-700 text-base mb-4 font-light'>
            Some quick example text to build on the card title and make up the
            bulk of the card`s content.
          </p>
          <button
            type='button'
            className=' inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out'
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
