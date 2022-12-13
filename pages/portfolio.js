import Nav from '../components/Nav';
import styles from '../styles/Start.module.css';

const portfolio_data = [
  { img: 'assets/medical-webdesign.png', title: 'Medical Website' },
  {
    img: 'assets/cryptocurrency-webdesign.png',
    title: 'Cryptocurrency Website',
  },
  {
    img: 'assets/bitcoin-investment-design.jpg',
    title: 'Bitcoin Investment Web',
  },
  {
    img: 'assets/home-investment-webdesign.avif',
    title: 'Real Estate Website',
  },
  { img: 'assets/dental-webdesign.png', title: 'Dental Website' },
];

export default function portfolio() {
  return (
    <div className={styles.container}>
      <Nav />
      <main>
        {/* HERO AREA SECTION */}
        <section>
          <h1 class='text-3xl font-bold'>Our Portfolio</h1>
          <p>
            Eu ad dolore exercitation reprehenderit veniam anim Lorem duis
            laboris.
          </p>
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
              <div className='top'>
                <div>{/* Project Component */}</div>
                <div>{/* Project Component */}</div>
                <div>{/* Project Component */}</div>
              </div>
              <div className='bottom'>
                <div>{/* Project Component */}</div>
                <div>{/* Project Component */}</div>
              </div>
            </div>

            <button>See All Portfolio</button>
          </div>
        </section>

        {/* PROJECT INQUIRY SECTION */}
        <section>
          <div className='top-section'>
            <div>{/* Left Blue Line */}</div>
            <div>{/* Right Blue Line */}</div>
            <h2 class='text-2xl font-bold'>
              Creative People. Custom Designs. Great Results
            </h2>
            <p>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur.
            </p>
          </div>

          <div>{/* Project Inquiry Component */}</div>
        </section>

        <footer>SandCastle Web Design & Development</footer>
      </main>
    </div>
  );
}
