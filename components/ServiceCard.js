import React from 'react';

export default function ServiceCard(props) {
  return (
    <div>
      <image alt='icon' src={props.img} />
      <h4>{props.header}</h4>
      <p>{props.text}</p>
    </div>
  );
}
