import React from 'react';

export default function Testimonial(props) {
  return (
    <div>
      <div>
        <image alt='star' />
        <image alt='star' />
        <image alt='star' />
        <image alt='star' />
        <image alt='star' />
      </div>
      <p>
        Tempor labore irure velit amet minim consectetur dolore est cupidatat
        et. Reprehenderit consequat veniam aliqua irure incididunt velit qui
        consectetur ad
      </p>
      <div>
        <image alt='avatar' src={props.img} />
        <p>{props.name}</p>
        <p>{props.position}</p>
      </div>
    </div>
  );
}
