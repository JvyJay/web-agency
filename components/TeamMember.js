import React from 'react';
import Image from 'next/image';

import email from '../assets/email-send.svg';
import linkedin from '../assets/Linkedin2.svg';

export default function TeamMember(props) {
  return (
    <div>
      <div class='mb-12 lg:mb-0'>
        <Image
          class='rounded-lg shadow-lg mb-6 mx-auto'
          src={props.img}
          alt='avatar'
          style='width: 150px'
        />
        <h5 class='text-lg font-bold mb-4'>{props.name}</h5>
        <p class='mb-6'>{props.position}</p>
        <p class='mb-6'>{props.desc}</p>
        <ul class='list-inside flex mx-auto justify-center'>
          <a href={props.email} class='px-2'>
            <Image alt='Email' src={email} />
          </a>
          <a href={props.linkedin} class='px-2'>
            <Image alt='Linkedin' src={linkedin} />
          </a>
        </ul>
      </div>
    </div>
  );
}
