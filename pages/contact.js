import Nav from '../components/Nav';
import styles from '../styles/Start.module.css';

// Component
import Form from '../components/Form';

export default function contact() {
  return (
    <div>
      <Nav />
      <main>
        {/* CONTACT FORM SECTION */}
        <div class='block p-6 rounded-lg shadow-lg bg-white max-w-md'>
          <form>
            <div class='form-group mb-6'>
              <input
                type='text'
                class='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInput7'
                placeholder='Name'
              />
            </div>
            <div class='form-group mb-6'>
              <input
                type='email'
                class='form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleInput8'
                placeholder='Email address'
              />
            </div>
            <div class='form-group mb-6'>
              <div class='flex justify-start'>
                <div class='form-check form-check-inline mx-2'>
                  <input
                    class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='checkbox'
                    id='inlineCheckbox1'
                    value='option1'
                  />
                  <label
                    class='form-check-label inline-block text-gray-800'
                    for='inlineCheckbox1'
                  >
                    Webflow
                  </label>
                </div>
                <div class='form-check form-check-inline mx-2'>
                  <input
                    class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='option2'
                  />
                  <label
                    class='form-check-label inline-block text-gray-800'
                    for='inlineCheckbox2'
                  >
                    UI/UX Design
                  </label>
                </div>
                <div class='form-check form-check-inline mx-2'>
                  <input
                    class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='checkbox'
                    id='inlineCheckbox2'
                    value='option2'
                  />
                  <label
                    class='form-check-label inline-block text-gray-800'
                    for='inlineCheckbox2'
                  >
                    SEO
                  </label>
                </div>
              </div>
            </div>
            <div class='form-group mb-6'>
              <textarea
                class='
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      '
                id='exampleFormControlTextarea13'
                rows='3'
                placeholder='Message'
              ></textarea>
            </div>
            <div class='form-group form-check text-center mb-6'>
              <input
                type='checkbox'
                class='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
                id='exampleCheck87'
                checked
              />
              <label
                class='form-check-label inline-block text-gray-800'
                for='exampleCheck87'
              >
                Send me a copy of this message
              </label>
            </div>
            <button
              type='submit'
              class='
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out'
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <footer>SandCastle Web Design & Development</footer>
    </div>
  );
}
