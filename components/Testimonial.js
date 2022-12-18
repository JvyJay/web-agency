import React from 'react';
import Image from 'next/image';

export default function Testimonial(props) {
  return (
    <div class='flex justify-center'>
      <div class='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
        <div class='py-3 px-6 border-b border-gray-300'>
          <Image src={props.stars} alt='Star Rating' />
        </div>
        <div class='p-6'>
          <p class='text-gray-700 text-base mb-4'>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <button
            type='button'
            class=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Button
          </button>
        </div>
        <div class='py-3 px-6 border-t border-gray-300 text-gray-600'>
          <div>
            <Image src={props.img} alt='Avatar Image' />
            <div>
              <p>{props.name}</p>
              <p>{props.position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
