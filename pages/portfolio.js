import Nav from '../components/Nav';

export default function portfolio() {
  return (
    <div>
      <Nav />
      <main>
        {/* HERO AREA SECTION */}
        <section>
          <h1>Our Portfolio</h1>
          <p>
            Eu ad dolore exercitation reprehenderit veniam anim Lorem duis
            laboris.
          </p>
        </section>

        {/* PORTFOLIO SECTION*/}
        <section>
          <div className='top-section'>
            <h6>Portfolio</h6>
            <h2>Our Recent Works</h2>
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
            <h2>Creative People. Custom Designs. Great Results</h2>
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
