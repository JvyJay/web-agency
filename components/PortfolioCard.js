import React from 'react';

export default function PortfolioCard(props) {
  return (
    <div>
      <image alt='portfolio thumbnail' />
      <h4>{props.header}</h4>
      <p>{props.text}</p>
      <a href={props.link}>Read More</a>
    </div>
  );
}
