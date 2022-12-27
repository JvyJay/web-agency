import React from 'react';
import Image from 'next/image';
import email from '../assets/paper-plane.png';
import linkedin from '../assets/Linkedin2.svg';

export default function TeamMember(props) {
  return (
    <div class='my-10 px-4'>
      <div class='relative block rounded-lg shadow-lg bg-white p-6'>
        <div class='lg:flex flex-row items-center'>
          <div class='grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6'>
            <Image
              src={props.img}
              alt='Trendy Pants and Shoes'
              class='w-full rounded-md mb-6 lg:mb-0'
            />
          </div>
          <div class='grow-0 shrink-0 basis-auto w-full lg:w-7/12'>
            <h5 class='text-lg font-bold mb-2'>{props.name}</h5>
            <p class='text-gray-500 mb-4'>{props.position}</p>
            <ul class='list-inside flex mx-auto items-center justify-center'>
              <a href={props.email} class='px-2'>
                <Image width='15' src={email} alt='Email' />
              </a>
              <a href={props.linkedin} class='px-2'>
                <Image src={linkedin} alt='Linkedin' />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
