import React from 'react';

export default function FormComp() {
  return (
    <div>
      <div className='left'>
        <h2>Now Start Your Project</h2>
        <p>Sit cillum qui anim ullamco non labore eiusmod.</p>
        <i></i>
        <i></i>
        <i></i>
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
          <input
            class='inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'
            type='submit'
          >
            Send Message
          </input>
        </form>
      </div>
    </div>
  );
}
