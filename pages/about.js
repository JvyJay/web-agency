import Nav from '../components/Nav';
import styles from '../styles/Start.module.css';

// Components
import ProjectInquiry from '../components/ProjectInquiry';
import Footer from '../components/Footer';

const team_data = [
  {
    img: 'assets/david.jpg',
    name: 'David Newsom',
    position: 'Principal | Creative Director',
    desc: 'Areas of expertise that you apply routinely at Sandcastle: Creative direction, project management,  and primary client liaison.',
    linkedin:
      'https://www.linkedin.com/in/david-newsom-5633186?original_referer=https%3A%2F%2Fduckduckgo.com%2F',
    email: 'david@sandcastle-web.com',
  },
  {
    img: 'assets/ashlee.jpg',
    name: 'Ashlee Bowlee',
    position: 'Principal | Chief Technology Officer',
    desc: 'Areas of expertise that you apply routinely at Sandcastle? Windows Server Management, keeping things secure and up to date. Web Programming using ASP.NET C#, VB.NET, MSSQL, JavaScript and CSS. Various platforms including Umbraco, nopCommerce and AbleCommerce.',
    linkedin:
      'https://www.linkedin.com/in/ashleebowell?trk=public_profile_browsemap',
    email: 'ashlee@sandcastle-web.com',
  },
  {
    img: 'assets/brandon.jpg',
    name: 'Brandon Wysocki',
    position: 'Lead Developer',
    desc: 'Areas of expertise that you apply routinely at Sandcastle? Front end build work involving HTML, CSS, and Javascript. Back end development using ASP.NET C# and MSSQL. AbleCommerce Development.',
    linkedin: 'https://www.linkedin.com/in/brandon-wysocki-92080297',
    email: 'brandon@sandcastle-web.com',
  },
];

export default function about() {
  return (
    <div>
      <Nav />
      <main>
        {/* TEAM SECTION */}
        <section>
          <h1 class='text-3xl font-bold'>Our Team</h1>
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
      <ProjectInquiry />
      <Footer />
    </div>
  );
}
