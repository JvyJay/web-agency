import React from 'react';
// NEXT COMPONENTS
import Image from 'next/image';

// IMAGES
import email from '../assets/paper-plane.png';
// import linkedin from '../assets/LinkedinTwo.svg';

export default function TeamMember(props) {
  return (
    <div>
      <div className='relative block rounded-lg shadow-lg bg-white m-5 p-6'>
        <div>
          <div className='grow-0 shrink-0 basis-auto w-full h-60 bg-cover overflow-hidden mb-6'>
            <Image
              src={props.img}
              alt='Trendy Pants and Shoes'
              className='w-full rounded-md'
            />
          </div>
          <div className='grow-0 shrink-0 basis-auto w-full'>
            <h5 className='text-lg font-bold mb-2'>{props.name}</h5>
            <p className='text-primary mb-4'>{props.position}</p>
            <ul className='list-inside flex mx-auto items-center justify-center'>
              <a href={props.email} className='px-2'>
                <Image width='15' src={email} alt='Email' />
              </a>
              {/* <a href={props.linkedin} className='px-2'>
                <Image src={linkedin} alt='Linkedin' />
              </a> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
