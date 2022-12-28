import React from 'react';
import Image from 'next/image';

export default function PortfolioCard(props) {
  return (
    <div>
      <div class='flex justify-center flex-col text-center m-5 rounded-lg shadow-lg bg-white max-w-sm'>
        <a href='#!' className='h-40 bg-cover overflow-hidden'>
          <Image
            class='rounded-t-lg w-full'
            src={props.img}
            alt='Portfolio Image'
          />
        </a>
        <div class='p-6'>
          <h5 class='text-gray-900 text-xl font-medium mb-2'>{props.title}</h5>
          <p class='text-gray-700 text-base mb-4 font-light'>
            Some quick example text to build on the card title and make up the
            bulk of the card`s content.
          </p>
          <button
            type='button'
            class=' inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
