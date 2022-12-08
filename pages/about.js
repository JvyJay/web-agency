import Nav from '../components/Nav';

export default function about() {
  return (
    <div>
      <Nav />
      <main>
        {/* TEAM SECTION */}
        <section>
          <h1>Our Team</h1>
          <div className='team-container'>
            <div>{/* Team Member Component*/}</div>
            <div>{/* Team Member Component*/}</div>
            <div>{/* Team Member Component*/}</div>
          </div>
        </section>

        {/* PROJECT INQUIRY SECTION */}
        <section>
          <div className='top-section'>
            <div>{/* Left Blue Line */}</div>
            <div>{/* Right Blue Line */}</div>
            <h2>Is Your Current Developer Letting You Down?</h2>
            <p>
              Aliquip cillum culpa cupidatat officia id do commodo mollit id
              cillum elit anim excepteur.
            </p>
          </div>

          <div>{/* Project Inquiry Component */}</div>
        </section>
      </main>
      <footer>SandCastle Web Design & Development</footer>
    </div>
  );
}
