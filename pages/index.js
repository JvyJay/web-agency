// NEXT COMPONENTS
import Head from 'next/head';
import Image from 'next/image';

// COMPONENTS
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import Testimonial from '../components/Testimonial';
import ProjectInquiry from '../components/ProjectInquiry';
import Footer from '../components/Footer';
// COMPONENTS

// IMAGES
import img1 from '../assets/HeroArea.jpg';
// Service Card Icons
import webDesign from '../assets/web-design.png';
import shoppingOnline from '../assets/shopping-online.png';
import app from '../assets/app.png';
import seo from '../assets/seo.png';
import blogging from '../assets/blogging.png';
import computer from '../assets/computer.png';
import communication from '../assets/communication.png';
import marketing from '../assets/marketing.png';
// Portfolio Images
import portfolioImg1 from '../assets/real-estate-example.jpg';
import portfolioImg2 from '../assets/real-estate-example-2.jpg';
import portfolioImg3 from '../assets/real-estate-example3.avif';
// Testimonial Images
import testimonial1 from '../assets/jerome.jpg';
import testimonial2 from '../assets/cody.jpg';
import testimonial3 from '../assets/robert.jpg';
// IMAGES

// DATA
const service_data = [
  { img: webDesign, title: 'Web Design', key: 0 },
  { img: shoppingOnline, title: 'E-Commerce', key: 1 },
  { img: app, title: 'Mobile Solutions', key: 2 },
  { img: seo, title: 'Custom Development', key: 3 },
  { img: blogging, title: 'Content Management Systems', key: 4 },
  { img: computer, title: 'Hosting & Maintenance', key: 5 },
  { img: communication, title: 'Strategy & Consulting', key: 6 },
  { img: marketing, title: 'Online Marketing', key: 7 },
];
const portfolio_data = [
  { img: portfolioImg1, title: 'Real Estate LLC', key: 0 },
  { img: portfolioImg2, title: 'Real Estate Economy', key: 1 },
  { img: portfolioImg3, title: 'Just Real Estate', key: 2 },
];
const testimonial_data = [
  {
    img: testimonial1,
    name: 'Jerome Bell',
    position: 'Marketing Coordinator',
    key: 0,
  },
  {
    img: testimonial2,
    name: 'Cody Fisher',
    position: 'President of Sales',
    key: 1,
  },
  { img: testimonial3, name: 'Robert Fox', position: 'Web Designer', key: 2 },
];
// DATA

export default function Start() {
  return (
    <div className='font-montserrat text-neutral-800'>
      <Head>
        <title>Web Agency</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        {/* HERO AREA */}
        <section>
          <div className='relative h-screen h-full h-auto overflow-hidden'>
            <Image
              alt='Hero Area'
              src={img1}
              className='absolute object-cover w-full h-full h-auto'
            />
            {/* <div className='absolute inset-0 bg-black opacity-25'></div> */}
            <div className='container relative z-10 flex items-center text-center w-4/5 md:py-16 py-4 mx-auto rounded-lg md:my-32'>
              <div className='relative z-10 flex flex-col items-center w-full'>
                <h1 className='md:text-4xl text-2xl font-semibold md:my-5 my-1'>
                  Best Agency in The World
                </h1>
                <p>
                  Adipisicing id do aute culpa adipisicing culpa irure ullamco.
                </p>
                <div className='md:my-5 sm:my-0 flex justify-between'>
                  <button
                    type='button'
                    className='inline-block px-6 mx-2.5 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Start Project
                  </button>
                  <button
                    type='button'
                    className='inline-block px-6 mx-2.5 py-2.5 bg-white text-primary border-primary font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white-300 hover:shadow-lg focus:bg-white-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section>
          <div className='container-fluid mx-auto py-10 bg-bg'>
            <div className='flex flex-col justify-center items-center text-center'>
              <h6 className='text-primary font-bold'>Services</h6>
              <h2 className='text-2xl font-semibold'>
                Custom E-Commerce, Mobile & Web Application Development
              </h2>
              <p className='w-4/6 font-light mb-4'>
                Aliquip cillum culpa cupidatat officia id do commodo mollit id
                cillum elit anim excepteur. Duis magna elit voluptate consequat
                incididunt nostrud fugiat elit in nulla consectetur deserunt ex.
              </p>
            </div>

            <div className='container-fluid flex justify-center flex-row flex-wrap '>
              {service_data.map((e) => {
                return <ServiceCard key={e.key} img={e.img} title={e.title} />;
              })}
            </div>
          </div>
        </section>
        {/* SERVICES SECTION */}

        {/* PORTFOLIO SECTION*/}
        <section>
          <div className='container-fluid mx-auto py-10'>
            <div className='flex flex-col justify-center items-center text-center'>
              <h6 className='text-primary font-bold'>Portfolio</h6>
              <h2 className='text-2xl font-semibold'>Our Recent Works</h2>
              <p className='w-4/6 font-light mb-5'>
                Aliquip cillum culpa cupidatat officia id do commodo mollit id
                cillum elit anim excepteur. Duis magna elit voluptate consequat
                incididunt nostrud fugiat elit in nulla consectetur deserunt ex.
              </p>
            </div>

            <div className='flex flex-col justify-center text-center items-center'>
              <div className='flex justify-center flex-row flex-wrap'>
                {portfolio_data.map((e) => {
                  return (
                    <PortfolioCard key={e.key} img={e.img} title={e.title} />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* PORTFOLIO SECTION*/}

        {/* TESTIMONIALS SECTION */}
        <section>
          <div className='container-fluid mx-auto py-10'>
            <div className='flex flex-col justify-center items-center text-center mx-auto'>
              <h6 className='text-primary font-bold'>Reviews</h6>
              <h2 className='text-2xl font-semibold'>Customer Testimonials</h2>
              <p className='font-light mb-4'>
                Aliquip cillum culpa cupidatat officia id do commodo mollit id
                cillum elit anim excepteur.
              </p>
            </div>

            <div className='mx-auto px-4 flex flex-row justify-center flex-wrap'>
              {testimonial_data.map((e) => {
                return <Testimonial key={e.key} img={e.img} name={e.name} />;
              })}
            </div>
          </div>
        </section>
        {/* TESTIMONIALS SECTION */}

        {/* PROJECT INQUIRY SECTION */}
        <section className='container-fluid'>
          <div className='mx-auto py-10 flex flex-col justify-center items-center text-center text-primary'>
            <div className='flex flex-row justify-center items-center'>
              <hr className='md:w-48 h-1 bg-primary rounded border-0 mx-4'></hr>
              <h2 className='text-2xl font-semibold font-courgette '>
                Mobile Solution: Targeted. Optimized. Integrated.
              </h2>
              <hr className='md:w-48 h-1 bg-primary rounded border-0 mx-4'></hr>
            </div>
            <p className='mb-4'>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur.
            </p>
          </div>

          <ProjectInquiry />
        </section>
        {/* PROJECT INQUIRY SECTION */}

        {/* FAQ SECTION */}
        <section>
          <div className='container-fluid mx-auto py-10 text-center bg-bg'>
            <div>
              <h6 className='text-primary font-bold'>FAQ`s</h6>
              <h2 className='text-2xl font-semibold'>
                Find The Answers You Need
              </h2>
              <p className='font-light'>
                Aliquip cillum culpa cupidatat officia id do commodo mollit id
                cillum elit anim excepteur.
              </p>
            </div>

            <div className='grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8'>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> What is a SAAS platform?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    SAAS platform is a cloud-based software service that allows
                    users to access and use a variety of tools and
                    functionality.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> How does billing work?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    We offers a variety of billing options, including monthly
                    and annual subscription plans, as well as pay-as-you-go
                    pricing for certain services. Payment is typically made
                    through a credit card or other secure online payment method.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> Can I get a refund for my subscription?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    We offers a 30-day money-back guarantee for most of its
                    subscription plans. If you are not satisfied with your
                    subscription within the first 30 days, you can request a
                    full refund. Refunds for subscriptions that have been active
                    for longer than 30 days may be considered on a case-by-case
                    basis.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> How do I cancel my subscription?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    To cancel your We subscription, you can log in to your
                    account and navigate to the subscription management page.
                    From there, you should be able to cancel your subscription
                    and stop future billing.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> Can I try this platform for free?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    We offers a free trial of its platform for a limited time.
                    During the trial period, you will have access to a limited
                    set of features and functionality, but you will not be
                    charged.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> How do I access documentation?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    Documentation is available on the company`s website and can
                    be accessed by logging in to your account. The documentation
                    provides detailed information on how to use the , as well as
                    code examples and other resources.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> How do I contact support?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    If you need help with the platform or have any other
                    questions, you can contact the company`s support team by
                    submitting a support request through the website or by
                    emailing support@We.com.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> Do you offer any discounts or promotions?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    We may offer discounts or promotions from time to time. To
                    stay up-to-date on the latest deals and special offers, you
                    can sign up for the company`s newsletter or follow it on
                    social media.
                  </p>
                </details>
              </div>
              <div className='py-5'>
                <details className='group'>
                  <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
                    <span> How do we compare to other similar services?</span>
                    <span className='transition group-open:rotate-180'>
                      <svg
                        fill='none'
                        height='24'
                        shapeRendering='geometricPrecision'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        viewBox='0 0 24 24'
                        width='24'
                      >
                        <path d='M6 9l6 6 6-6'></path>
                      </svg>
                    </span>
                  </summary>
                  <p className='text-neutral-600 mt-3 group-open:animate-fadeIn'>
                    This platform is a highly reliable and feature-rich service
                    that offers a wide range of tools and functionality. It is
                    competitively priced and offers a variety of billing options
                    to suit different needs and budgets.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ SECTION */}
      </main>
      <Footer />
    </div>
  );
}
