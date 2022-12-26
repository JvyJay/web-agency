import React from 'react';
import Image from 'next/image';

export default function ServiceCard(props) {
  return (
    <div>
      <div class='flex justify-center flex-col text-center m-5 items-center p-6 rounded-lg shadow-lg bg-white max-w-sm'>
        <Image
          class='text-center'
          width='50'
          height='100'
          alt='Icon'
          src={props.img}
        />
        <h5 class='text-gray-900 text-xl leading-tight font-medium mb-2'>
          {props.title}
        </h5>
        <p class='text-gray-700 text-base mb-4 font-light'>
          Some quick example text to build on the card title and make up the
          bulk of the card`s content.
        </p>
      </div>
    </div>
  );
}
