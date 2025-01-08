import { Navbar } from './Navbar'; // Import your Navbar component

export default function Homepage() {
  return (
    <div className="bg-sky-800">

      <Navbar />

      <div className='ml-40'>
        <h1 className='text-5xl text-white font-bold'>HI!</h1>
        <br /> <br />
        <h1 className='text-4xl text-black font-sans font-bold'>I'M UMAR QURESHI </h1>
        <h1 className='text-4xl text-black font-sans mt-4 font-bold'>PROFESSIONAL</h1>
        <h1 className='text-4xl font-bold text-sky-700 font-sans mt-4 bg-white w-80 px-3 rounded-xl p-2 border-4  border-black'>WEB DEVELOPER</h1>
      </div>
      <br /> <br /> <br /> <br />


      <div className='flex flex-col items-center'>

        {/* Horizontal Line Above */}
        <div className="w-1/2 border-t-2 border-gray-300 mb-4"></div>

        <h1 className='text-3xl font-bold text-white'> ABOUT ME</h1>
        <div className='border-2 border-black p-6 w-96'>
          <p>I'm Hafiz Umar Qureshi, a Computer Science and Software Engineering graduate from NED University. I’m passionate about technology and aim to create helpful solutions through my work.</p>
        </div>

        {/* Horizontal Line Below */}
        <div className="w-1/2 border-t-2 border-gray-300 mt-4"></div>


      </div>

      <div className='grid grid-cols-2 gap-20 px-24 mt-8'>

        <div className='flex justify-center text-white'>Image</div>

        <div className='flex justify-center'>

          <p className='text-white p-6 text-justify'>As a prefessional web developer i enjoys building websites that are both user-friendly and visually appealing. Along with my web development skills, I have experience in designing modern and creative layouts, improving website visibility through SEO, and creating cross-platform mobile applications using Flutter. Additionally, I have a strong interest in Artificial Intelligence (AI) and Machine Learning (ML), and I enjoy working on projects that integrate smart, data-driven solutions. I am passionate about turning ideas into fully functional projects that make a real impact. Whether it’s crafting a responsive website, optimizing it for search engines, developing a mobile app, or implementing AI and ML solutions, I love helping businesses grow and succeed in the digital world.

          </p>

        </div>



      </div>




    </div>
  );
}
