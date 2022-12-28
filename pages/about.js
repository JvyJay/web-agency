import Nav from '../components/Nav';
import styles from '../styles/Start.module.css';

// Components
import ProjectInquiry from '../components/ProjectInquiry';
import Footer from '../components/Footer';
import TeamMember from '../components/TeamMember';

// Images
import david_img from '../assets/david.jpg';
import ashlee_img from '../assets/ashlee.jpg';
import brandon_img from '../assets/brandon.jpg';

const team_data = [
  {
    img: david_img,
    name: 'David Newsom',
    position: 'Principal | Creative Director',
    desc: 'Areas of expertise that you apply routinely at Sandcastle: Creative direction, project management,  and primary client liaison.',
    linkedin:
      'https://www.linkedin.com/in/david-newsom-5633186?original_referer=https%3A%2F%2Fduckduckgo.com%2F',
    email: 'mailto:david@sandcastle-web.com',
    key: 0,
  },
  {
    img: ashlee_img,
    name: 'Ashlee Bowlee',
    position: 'Principal | Chief Technology Officer',
    desc: 'Areas of expertise that you apply routinely at Sandcastle? Windows Server Management, keeping things secure and up to date. Web Programming using ASP.NET C#, VB.NET, MSSQL, JavaScript and CSS. Various platforms including Umbraco, nopCommerce and AbleCommerce.',
    linkedin:
      'https://www.linkedin.com/in/ashleebowell?trk=public_profile_browsemap',
    email: 'mailto:ashlee@sandcastle-web.com',
    key: 1,
  },
  {
    img: brandon_img,
    name: 'Brandon Wysocki',
    position: 'Lead Developer',
    desc: 'Areas of expertise that you apply routinely at Sandcastle? Front end build work involving HTML, CSS, and Javascript. Back end development using ASP.NET C# and MSSQL. AbleCommerce Development.',
    linkedin: 'https://www.linkedin.com/in/brandon-wysocki-92080297',
    email: 'mailto:brandon@sandcastle-web.com',
    key: 2,
  },
];

export default function about() {
  return (
    <div className='font-montserrat text-neutral-800'>
      <Nav />
      <main>
        {/* TEAM SECTION */}
        <section className='text-center my-10 px-4 container mx-auto'>
          <h1 class='text-3xl font-bold'>Our Team</h1>
          <div class='grid md:grid-cols-3 gap-6 xl:gap-x-12'>
            {team_data.map((e) => {
              return (
                <TeamMember
                  key={e.key}
                  name={e.name}
                  img={e.img}
                  position={e.position}
                  desc={e.desc}
                  email={e.email}
                  linkedin={e.linkedin}
                />
              );
            })}
          </div>
        </section>

        {/* PROJECT INQUIRY SECTION */}
        <section className='mt-10'>
          <div className='container mx-auto px-4 flex flex-col justify-center items-center text-center text-blue-400'>
            <div className='flex flex-row justify-center items-center'>
              <hr className='w-48 h-1 bg-blue-400 rounded border-0  mx-4'></hr>
              <h2 class='text-2xl font-semibold font-courgette '>
                Is Your Current Developer Letting You Down?
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
