import Nav from '../components/Nav';
import styles from '../styles/Start.module.css';

// Components
import PortfolioCard from '../components/PortfolioCard';
import ProjectInquiry from '../components/ProjectInquiry';
import Footer from '../components/Footer';
// Components

// Images
import portfolio1 from '../assets/medical-webdesign.png';
import portfolio2 from '../assets/cryptocurrency-webdesign.png';
import portfolio3 from '../assets/bitcoin-investment-design.jpg';
import portfolio4 from '../assets/home-investment-webdesign.avif';
import portfolio5 from '../assets/dental-webdesign.png';

const portfolio_data = [
  { img: portfolio1, title: 'Medical Website', key: 0 },
  {
    img: portfolio2,
    title: 'Crypto Website',
    key: 1,
  },
  {
    img: portfolio3,
    title: 'Bitcoin Website',
    key: 2,
  },
  {
    img: portfolio4,
    title: 'Real Estate Website',
    key: 3,
  },
  { img: portfolio5, title: 'Dental Website', key: 4 },
];

export default function portfolio() {
  return (
    <div className='font-montserrat text-neutral-800'>
      <Nav />
      <main>
        {/* PORTFOLIO SECTION*/}
        <section className='text-center my-10 px-4 container mx-auto'>
          <div className='flex flex-col items-center justify-center mb-5'>
            <h6 className='text-blue-400 font-bold'>Portfolio</h6>
            <h2 className='text-2xl font-semibold'>Our Recent Works</h2>
            <p className='w-3/6 font-light mb-4'>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur. Duis magna elit voluptate consequat
              incididunt nostrud fugiat elit in nulla consectetur deserunt ex.
            </p>
          </div>
          <div className='flex justify-center flex-row flex-wraps mx-auto'>
            {portfolio_data.map((e) => {
              return <PortfolioCard key={e.key} img={e.img} title={e.title} />;
            })}
          </div>
        </section>

        {/* PROJECT INQUIRY SECTION */}
        <section className='mt-10 mx-auto'>
          <div className='px-4 flex flex-col justify-center items-center text-center text-blue-400'>
            <div className='flex flex-row justify-center items-center'>
              <hr className='w-48 h-1 bg-blue-400 rounded border-0 mx-4'></hr>
              <h2 class='text-2xl font-semibold font-courgette'>
                Creative People. Custom Designs. Great Results.
              </h2>
              <hr className='w-48 h-1 bg-blue-400 rounded border-0 mx-4'></hr>
            </div>
            <p className='mb-4'>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur.
            </p>
          </div>

          <ProjectInquiry />
        </section>
      </main>
      <Footer />
    </div>
  );
}
