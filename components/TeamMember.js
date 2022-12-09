import React from 'react';

export default function TeamMember(props) {
  return (
    <div>
      <div className='top-section'>
        <image alt='Team Member' src={props.name} />
        <p>{props.topText}</p>
      </div>

      <div className='bottom-section'>
        <p>{props.bottomText}</p>
        <div className='links'>
          <div>
            <span>{props.phone}</span>
            <span>{props.email}</span>
          </div>
          <div>
            <image>
              <a href={props.message}>{/* Social Icon */}</a>
            </image>
            <image>
              <a href={props.linkedin}>{/* Social Icon */}</a>
            </image>
            <image>
              <a href={props.github}>{/* Social Icon */}</a>
            </image>
          </div>
        </div>
      </div>
    </div>
  );
}
