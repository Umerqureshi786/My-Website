/* eslint-disable react/no-unescaped-entities */


import { Navbar } from './Navbar';
import Image from 'next/image';
import { Footer } from './Footer';
export default function Homepage() {
  return (
    <div className="bg-sky-800">

      <Navbar />

      <div className='grid grid-cols-1 gap-2 mt-8 sm:grid-cols-1 md:grid-cols-2'>

        <div className='ml-80 w-max'>
          <h1 className='text-7xl text-white font-bold mt-20'>HI!</h1>
          <br /> <br />
          <h1 className='text-6xl text-white font-sans font-bold'>I'M UMAR QURESHI </h1>
          <h1 className='text-6xl text-white font-sans mt-4 font-bold'>PROFESSIONAL</h1> <br />
          <h1 className='text-5xl font-bold text-sky-700 font-sans mt-4 bg-white w-max px-3 rounded-xl p-2 border-4  border-black hover:bg-sky-700  hover:text-white'>WEB DEVELOPER</h1>
        </div>





        <div className=' mt-10 '>

          <Image src={"/Main 2.png"} alt='Umar ' width={400} height={400} className='ml-32 rounded-3xl mt-16 border-2 shadow-2xl shadow-sky-300 border-white' />


        </div>



      </div>

      <section id="About" />

      <br /><br /> <br /> <br /> <br />


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

      <div className='grid grid-cols-1 gap-12 px-24 mt-2'>

        {/* <div className='flex justify-end'>

          <Image src={"/Umar.jpeg"} alt='Umar' width={300} height={300} className='rounded-full ' />

        </div> */}

        <div className='flex justify-center py-12 px-10 '>

          <p className='text-white p-2 text-justify px-48'> As a Web Developer i enjoys building websites that are both user-friendly and visually appealing. Along with my web development skills, I have experience in designing modern and creative layouts, improving website visibility through SEO, and creating cross-platform mobile applications using Flutter. Additionally, I have a strong interest in Artificial Intelligence (AI) and Machine Learning (ML), and I enjoy working on projects that integrate smart, data-driven solutions. I am passionate about turning ideas into fully functional projects that make a real impact. Whether it’s crafting a responsive website, optimizing it for search engines, developing a mobile app, or implementing AI and ML solutions, I love helping businesses grow and succeed in the digital world.

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
              <h1 className='font-bold text-xl text-amber-400'>Hafiz e Quran</h1>
              <p>Iqra Jamia Rouza Tul Atfal</p>

              <br />


              <ul className="list-disc"> <li>Mar 2015 - June 2017</li></ul>
              <h1 className='font-bold text-xl text-amber-400'>Intermediate, Pre-Engineering</h1>
              <p>FG Boys Inter College Karachi</p>

              <br />

              <ul className="list-disc"><li>Feb 2018 - Mar 2022 </li></ul>
              <h1 className='font-bold text-xl text-amber-400'>Bachelors, CSIT</h1>
              <p>BBSUL Karachi</p>

              <br />

              <ul className="list-disc"> <li>Feb 2024 - Present</li> </ul>
              <h1 className='font-bold text-xl text-amber-400'>Web 3, AI, & Metaverse</h1>
              <p>Governor's Initiative for Artificial Intelligence & Computing</p>


            </div>
          </div>


        </div>

        <div className=''>
          <Image src={"/Cap.png"} alt='cap' width={400} height={300} className='mt-10' />

        </div>



      </div>


      <section id="Skills" />

      <br /> <br /> <br /> <br />




      <div>




        <div className='flex flex-col items-center '>

          {/* Horizontal Line Above */}
          <div className="w-1/2 border-t-2 border-gray-300 mb-4"></div>

          <h1 className='text-3xl font-bold text-white '> SKILLS</h1>

          <div className='grid grid-cols-3 gap-4 mt-10 px-60 '>


            <div className='border-2 border-white text-center rounded-md bg-sky-950 '>
              <div className='flex justify-center mt-4'><Image src={"/coding.png"} alt='coding' width={40} height={40} />
              </div>
              <h1 className='font-bold text-lg text-white mt-2'>Web Development</h1>


              <p className='text-justify p-2 text-white'>Skilled in using Languages and frameworks like HTML, CSS, JavaScript, TypeScript, React.js, Next.js, and Firebase. Experienced in building responsive, optimized, and user friendly websites!</p>

            </div>




            <div className='border-2 border-white text-center rounded-md bg-sky-950 '>

              <div className='flex justify-center mt-4'><Image src={"/App.png"} alt='App' width={40} height={40} />
              </div>

              <h1 className='font-bold text-lg text-white mt-2'>App Development</h1>
              <p className='text-justify p-2 text-white'>Competent in using frameworks like Flutter, React Native, and Android Studio. Learning to create responsive, optimized, and user-friendly mobile apps!

              </p>

            </div>


            <div className='border-2 border-white text-center rounded-md bg-sky-950'>

              <div className='flex justify-center mt-4'><Image src={"/ux.png"} alt='UX' width={40} height={40} />
              </div>

              <h1 className='font-bold text-lg text-white mt-2'>Web Designing</h1>
              <p className='text-justify p-2 text-white'>Proficient in web design tools like Figma and Adobe XD. Experienced in crafting responsive, visually appealing, and user friendly website layouts!

              </p>

            </div>

            <div className='border-2 border-white text-center rounded-md bg-sky-950'>
              <div className='flex justify-center mt-4'><Image src={"/seo.png"} alt='seo' width={40} height={40} />
              </div>

              <h1 className='font-bold text-lg text-white mt-2'>Search Engine Optimization</h1>

              <p className='text-justify p-2 text-white'>Experienced in using SEO tools like Google Analytics, SEMrush, Ahrefs, Ubersuggest, and Moz. Knowledgeable in optimizing website content, performing keyword research, and improving search engine rankings to drive organic traffic!

              </p>

            </div>

            <div className='border-2 border-white text-center rounded-md bg-sky-950'>

              <div className='flex justify-center mt-4'><Image src={"/marketing.png"} alt='marketing' width={40} height={40} />
              </div>

              <h1 className='font-bold text-lg text-white mt-2'>Digital Marketing</h1>

              <p className='text-justify p-2 text-white'>Proficient in using digital marketing tools such as Google Analytics, Google Trends, SEMrush, and Similarweb to drive data-driven strategies. Skilled in applying techniques like SEO, content marketing and social media marketing!

              </p>

            </div>

            <div className='border-2 border-white text-center rounded-md bg-sky-950'>

              <div className='flex justify-center mt-4'><Image src={"/pen.png"} alt='designing' width={40} height={40} />
              </div>

              <h1 className='font-bold text-lg text-white mt-2'>Graphic Designing</h1>

              <p className='text-justify p-2 text-white'>Expert in using design tools such as Adobe Photoshop, Illustrator, and Figma to create visually appealing and effective designs. Skilled in graphic design techniques including Flyer creation, branding, UI/UX design, and digital illustrations!

              </p>

            </div>


          </div>


        </div>


        <section id="Work" />

        <br /> <br /> <br />



        <div className='flex flex-col items-center'>

          <div>
            <h1 className='text-3xl font-bold text-white'> WORK </h1>
          </div>

          <div className='grid grid-cols-2 gap-16 mt-12'>


            <div className='bg-sky-900 border-2 border-white rounded-xl text-center text-white font-bold text-xl'><p>Governor House Website</p>

              <Image src={"/Governor.png"} alt='governor house' height={320} width={320} className='rounded-xl w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000 mt-2' />

            </div>



            <div className=' bg-sky-900 border-2 border-white rounded-xl text-center text-white font-bold text-xl'>Saylani Microfinance App
              Website<Image src={"/Saylani.png"} alt='saylani microfinance' height={320} width={320} className='rounded-xl w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000 mt-2' />

            </div>

            <div className=' bg-sky-900 border-2 border-white rounded-xl text-center text-white font-bold text-xl'>Iqra School Website
              Website<Image src={"/Iqra.png"} alt='Iqra school' height={320} width={320} className='rounded-xl w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000 mt-2' />

            </div>



            <div className=' bg-sky-900 border-2 border-white rounded-xl text-center text-white font-bold text-xl'>Formuli Cricket Club
              Website<Image src={"/Formuli.png"} alt='cricket club' height={320} width={320} className='rounded-xl w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000 mt-2' />

            </div>

            <div className='  rounded-xl border-2 border-white bg-sky-900 text-center text-white font-bold text-xl'> Rent A Car Website
              <Image src={"/Ecommerce.png"} alt='Ecommerce web' height={320} width={320} className='rounded-xl w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000 mt-2' />

            </div>


            <div className='  rounded-xl border-2 border-white  bg-sky-900 text-center text-white font-bold text-xl'>Github Website
              <Image src={"/Github.png"} alt='Github' height={320} width={320} className='rounded-xl w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-1000 mt-2' />

            </div>
          </div>
          <br /> <br /> <br />



        </div>

        <section id="Contact" />


        <br /> <br />




        <div className='flex flex-col  bg-sky-900 text-white gap-10'>
          <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold text-white mt-3'>CONTACT ME</h1>
          </div>

          <div className='flex  gap-4 mt-4 ml-96'>
            <Image src={"/communication.png"} alt='Email' width={40} height={40} />
            <p className='mt-2'>:</p>
            <p className='mt-2'>qureshiumer776@gmail.com</p>
          </div>

          <div className='flex gap-4  ml-96'>
            <Image src={"/phone.png"} alt='call' width={40} height={40} />
            <p className='mt-2'>:</p>
            <p className='mt-2'>0348-2500818</p>
          </div>


          <div className='flex gap-4  ml-96 '>
            <Image src={"/map.png"} alt='map' width={40} height={40} />
            <p className='mt-2'>:</p>
            <p className='mt-2'> Massan Road Near Shireen Jinnah Colony, Clifton, Karachi</p>
          </div>




          <br />


        </div>



        <br />


        <Footer />



      </div>

    </div>
  );
}
