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
        <button>Let`s Talk</button>
      </div>
    </div>
  );
}
