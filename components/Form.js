import React from 'react';

export default function Form() {
  return (
    <div>
      <div className='left'>
        <h2>Now Start Your Project</h2>
        <p>Sit cillum qui anim ullamco non labore eiusmod.</p>
        <i></i>
        <i></i>
        <i></i>

        <div>
          <image />
          <image />
          <image />
          <image />
        </div>
      </div>
      <div className='right'>
        <form>
          <label>
            Full Name
            <input type='text' name='name' placeholder='John Doe'></input>
          </label>
          <label>
            Email
            <input
              type='email'
              name='email'
              placeholder='example@gmail.com'
            ></input>
          </label>
          <label>
            What service do you want?
            <input type='checkbox'>Webflow</input>
            <input type='checkbox'>UI/UX Design</input>
            <input type='checkbox'>SEO</input>
          </label>
          <label>
            <textarea placeholder='Write your message'></textarea>
          </label>
          <input type='submit'>Send Message</input>
        </form>
      </div>
    </div>
  );
}
