import React from 'react';

// NEXT COMPONENTS
import Image from 'next/image';

// Images
import img from '../assets/Sand2.jpg';

export default function ProjectInquiry() {
  return (
    <div>
      <Image alt='Sand Image' src={img} />

      <div>
        <h2>Do you have a project in mind?</h2>
        <p>Laboris officia ad fugiat aliqua ex magna amet.</p>
        <button
          type='button'
          class='inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out'
        >
          Let`s Talk
        </button>
      </div>
    </div>
  );
}
