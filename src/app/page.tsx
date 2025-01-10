import { Navbar } from './Navbar'; // Import your Navbar component
import Image from 'next/image';
export default function Homepage() {
  return (
    <div className="bg-sky-800">

      <Navbar />

      <div className='grid grid-cols-2 gap-2 mt-8'>

        <div className='ml-60 w-max'>
          <h1 className='text-7xl text-white font-bold mt-10'>HI!</h1>
          <br /> <br />
          <h1 className='text-6xl text-black font-sans font-bold'>I'M UMAR QURESHI </h1>
          <h1 className='text-6xl text-black font-sans mt-4 font-bold'>PROFESSIONAL</h1> <br />
          <h1 className='text-5xl font-bold text-sky-700 font-sans mt-4 bg-white w-max px-3 rounded-xl p-2 border-4  border-black hover:bg-sky-700  hover:text-white'>SOFTWARE ENGINEER</h1>
        </div>


        <div className=' '>

          <Image src={"/Avatar.png"} alt='Umar avatar' width={400} height={300} className='ml-16 -mt-20 ' />


        </div>



      </div>


      <br /> <br /> 


      <div className='flex flex-col items-center'>

        {/* Horizontal Line Above */}
        <div className="w-1/2 border-t-2 border-gray-300 mb-4"></div>

        <h1 className='text-3xl font-bold text-white'> ABOUT ME</h1>
        <div className='p-6 w-96 mt-2'>
          <p className='text-justify text-white'>I'm Hafiz Umar Qureshi, a Computer Science and Software Engineering graduate from NED University. I’m passionate about technology and aim to create helpful solutions through my work.</p>
        </div>

        {/* Horizontal Line Below */}
        <div className="w-1/2 border-t-2 border-gray-300 mt-4"></div>


      </div>

      <div className='grid grid-cols-2 gap-12 px-24 mt-8'>

        <div className='flex justify-end'>

          <Image src={"/Umar.jpeg"} alt='Umar' width={300} height={300} className='rounded-full ' />

        </div>

        <div className='flex justify-center py-12 px-10 '>

          <p className='text-white p-2 text-justify'> As a prefessional web developer i enjoys building websites that are both user-friendly and visually appealing. Along with my web development skills, I have experience in designing modern and creative layouts, improving website visibility through SEO, and creating cross-platform mobile applications using Flutter. Additionally, I have a strong interest in Artificial Intelligence (AI) and Machine Learning (ML), and I enjoy working on projects that integrate smart, data-driven solutions. I am passionate about turning ideas into fully functional projects that make a real impact. Whether it’s crafting a responsive website, optimizing it for search engines, developing a mobile app, or implementing AI and ML solutions, I love helping businesses grow and succeed in the digital world.

          </p>

        </div>
      </div>



      <div className='flex gap-20 mt-10'>

        <div className=' ml-40'>

          <div className='ml-48 text-white'>

            <div>
              <h1 className='text-3xl font-bold text-white ml-3'>EDUCATION:</h1>
            </div>

            <br />

            <div className='ml-5 p-4'>


              <ul className="list-disc"> <li>May 2010 - Dec 2012</li></ul>
              <h1 className='font-bold text-xl'>Hafiz e Quran</h1>
              <p>Iqra Jamia Rouza Tul Atfal</p>

              <br />


              <ul className="list-disc"> <li>Mar 2015 - June 2017</li></ul>
              <h1 className='font-bold text-xl'>Intermediate, Pre-Engineering</h1>
              <p>FG Boys Inter College Karachi</p>

              <br />

              <ul className="list-disc"><li>Feb 2018 - Mar 2022 </li></ul>
              <h1 className='font-bold text-xl'>Bachelors, CSIT</h1>
              <p>BBSUL Karachi</p>

              <br />

              <ul className="list-disc"> <li>Feb 2024 - Present</li> </ul>
              <h1 className='font-bold text-xl'>Web 3, AI, & Metaverse</h1>
              <p>Governor's Initiative for Artificial Intelligence & Computing</p>


            </div>
          </div>


        </div>

        <div className=''>
          <Image src={"/Cap.png"} alt='cap' width={400} height={300} className='mt-10'/>
        
        </div>



      </div>





      <br /> <br /> <br /> <br />
      <div>

        <div className='flex flex-col items-center'>

          {/* Horizontal Line Above */}
          <div className="w-1/2 border-t-2 border-gray-300 mb-4"></div>

          <h1 className='text-3xl font-bold text-white'> SKILLS</h1>

          <div className='grid grid-cols-3 gap-4 mt-10 px-44 '>


            <div className='border-2 border-white text-center rounded-md'>
              <h1 className='font-bold text-lg text-white'>Web Development</h1>
              <p className='text-justify p-2 text-white'>Skilled in using Languages and frameworks like HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Firebase. Experienced in building responsive, optimized, and user friendly websites!</p>

            </div>




            <div className='border-2 border-white text-center rounded-md '>

              <h1 className='font-bold text-lg text-white'>App Development</h1>
              <p className='text-justify p-2 text-white'>Competent in using frameworks like Flutter, React Native, and Android Studio. Experienced in building responsive, optimized, and user-friendly mobile apps!

              </p>

            </div>


            <div className='border-2 border-white text-center rounded-md '>

              <h1 className='font-bold text-lg text-white'>Web Designing</h1>
              <p className='text-justify p-2 text-white'>Proficient in web design tools like Figma and Adobe XD. Experienced in crafting responsive, visually appealing, and user friendly website layouts!

              </p>

            </div>

            <div className='border-2 border-white text-center rounded-md '>

              <h1 className='font-bold text-lg text-white'>Search Engine Optimization</h1>
              <p className='text-justify p-2 text-white'>Experienced in using SEO tools like Google Analytics, SEMrush, Ahrefs, Ubersuggest, and Moz. Knowledgeable in optimizing website content, performing keyword research, and improving search engine rankings to drive organic traffic

              </p>

            </div>

            <div className='border-2 border-white text-center rounded-md '>

              <h1 className='font-bold text-lg text-white'>Digital Marketing</h1>
              <p className='text-justify p-2 text-white'>Proficient in using digital marketing tools such as Google Analytics, Google Trends, SEMrush, and Similarweb to drive data-driven strategies. Skilled in applying techniques like SEO, content marketing, social media marketing, and paid ads to optimize brand visibility and engagement.

              </p>

            </div>

            <div className='border-2 border-white text-center rounded-md '>

              <h1 className='font-bold text-lg text-white'>Graphic Designing</h1>
              <p className='text-justify p-2 text-white'>Expert in using design tools such as Adobe Photoshop, Illustrator, and Figma to create visually appealing and effective designs. Skilled in graphic design techniques including Flyer creation, branding, UI/UX design, and digital illustrations!

              </p>

            </div>





















          </div>



        </div>






        <p>jhkj</p>

      </div>




    </div>
  );
}
