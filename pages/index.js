// NEXT COMPONENTS
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Start.module.css';

// COMPONENTS
import Nav from '../components/Nav';

// IMAGES
import img1 from '../assets/HeroArea.jpg';

const service_data = [
  { img: 'assets/web-design.png', title: 'Web Design' },
  { img: 'assets/shopping-online.png', title: 'E-Commerce' },
  { img: 'assets/app.png', title: 'Mobile Solutions' },
  { img: 'assets/seo.png', title: 'Custom Development' },
  { img: 'assets/blogging.png', title: 'Content Management Systems' },
  { img: 'assets/computer.png', title: 'Hosting & Maintenance' },
  { img: 'assets/communication.png', title: 'Strategy & Consulting' },
  { img: 'assets/marketing.png', title: 'Online Marketing' },
];

const portfolio_data = [
  { img: 'assets/real-estate-example.jpg', title: 'Real Estate LLC' },
  { img: 'assets/real-estate-example-2.jpg', title: 'Real Estate Economy' },
  { img: 'assets/real-estate-example3.avif', title: 'Just Real Estate' },
];

const testimonial_data = [
  {
    img: 'assets/jerome.jpg',
    name: 'Jerome Bell',
    position: 'Marketing Coordinator',
  },
  {
    img: 'assets/cody.jpg',
    name: 'Cody Fisher',
    position: 'President of Sales',
  },
  { img: 'assets/robert.jpg', name: 'Robert Fox', position: 'Web Designer' },
];

export default function Start() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Agency</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <main>
        {/* HERO AREA */}
        <section>
          <div className='bg'>
            <Image alt='Hero Area' src={img1} />
          </div>

          <div className='text-content'>
            <h1 className='text-3xl font-bold'>Best Agency in The World</h1>
            <p>Adipisicing id do aute culpa adipisicing culpa irure ullamco.</p>
            <div className='button-container'>
              <button>Start Project</button>
              <button>Learn More</button>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section>
          <div className='top-section'>
            <h6>Services</h6>
            <h2 class='text-2xl font-bold'>
              Custom E-Commerce, Mobile & Web Application Development
            </h2>
            <p>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur. Duis magna elit voluptate consequat
              incididunt nostrud fugiat elit in nulla consectetur deserunt ex.
            </p>
          </div>

          <div className='card-container'>
            <div className='top'>
              <div>{/* Card */}</div>
              <div>{/* Card */}</div>
              <div>{/* Card */}</div>
              <div>{/* Card */}</div>
            </div>
            <div className='bottom'>
              <div>{/* Card Component */}</div>
              <div>{/* Card Component */}</div>
              <div>{/* Card Component */}</div>
              <div>{/* Card Component */}</div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION*/}
        <section>
          <div className='top-section'>
            <h6>Portfolio</h6>
            <h2 class='text-2xl font-bold'>Our Recent Works</h2>
            <p>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur. Duis magna elit voluptate consequat
              incididunt nostrud fugiat elit in nulla consectetur deserunt ex.
            </p>
          </div>

          <div className='bottom-section'>
            <div className='portfolio-container'>
              <div>{/* Project Component */}</div>
              <div>{/* Project Component */}</div>
              <div>{/* Project Component */}</div>
            </div>

            <button>See All Portfolio</button>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section>
          <div className='top-section'>
            <h2 class='text-2xl font-bold'>Customer Testimonials</h2>
            <p>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur.
            </p>
          </div>

          <div className='testimonial-container'>
            <div>{/* Testimonial Component */}</div>
            <div>{/* Testimonial Component */}</div>
            <div>{/* Testimonial Component */}</div>
          </div>
        </section>

        {/* PROJECT INQUIRY SECTION */}
        <section>
          <div className='top-section'>
            <div>{/* Left Blue Line */}</div>
            <div>{/* Right Blue Line */}</div>
            <h2 class='text-2xl font-bold'>
              Mobile Solution: Targeted. Optimized. Integrated.
            </h2>
            <p>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur.
            </p>
          </div>

          <div>{/* Project Inquiry Component */}</div>
        </section>

        {/* FAQ SECTION */}
        <section>
          <div className='top-section'>
            <h6>FAQ`s</h6>
            <h2 class='text-2xl font-bold'>Find The Answers You Need</h2>
            <p>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur.
            </p>
          </div>

          <div className='faq-container'>
            <div>{/* Dropdown Box */}</div>
            <div>{/* Dropdown Box */}</div>
            <div>{/* Dropdown Box */}</div>
            <div>{/* Dropdown Box */}</div>
            <div>{/* Dropdown Box */}</div>
          </div>
        </section>
      </main>
      <footer>SandCastle Web Design & Development</footer>
    </div>
  );
}
