/* eslint-disable react/no-unescaped-entities */


import { Navbar } from './Navbar';
import Image from 'next/image';
import { Footer } from './Footer';
export default function Homepage() {
  return (
    <div className="bg-sky-800">

      <Navbar />

      <div className='grid grid-cols-1 gap-2 mt-8 md:grid-cols-2'>
        {/* Left Column - Text Content */}
        <div className='md:ml-20 lg:ml-32 xl:ml-40 mx-4 sm:mx-8 md:mx-0 text-center md:text-left'>
          <h1 className='text-5xl sm:text-6xl md:text-7xl text-white font-bold mt-8 md:mt-20'>
            HI!
          </h1>

          <div className='space-y-4 mt-6 md:mt-12'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl text-white font-sans font-bold'>
              I'M UMAR QURESHI
            </h1>
            <h1 className='text-4xl sm:text-5xl md:text-6xl text-white font-sans font-bold'>
              PROFESSIONAL
            </h1>
            <div className='flex justify-center md:justify-start'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-sky-700 font-sans bg-white w-max px-3 rounded-xl p-2 border-4 border-black hover:bg-sky-700 hover:text-white transition-all'>
                WEB DEVELOPER
              </h1>
            </div>
          </div>

        </div>

        {/* Right Column - Image */}
        <div className='mt-8 md:mt-10 flex justify-center md:justify-start'>
          <Image src={"/Main 2.png"} alt='Umar' width={400} height={400}
            className='w-3/4 sm:w-2/3 md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-3xl border-2 shadow-2xl shadow-sky-300 border-white mx-auto md:ml-8 lg:ml-12'
          />
        </div>
      </div>



      <section id="About" />

      <br /><br /> <br /> <br /> <br />


      <div className='flex flex-col items-center'>

        {/* Horizontal Line Above */}





        <div className="w-1/2 border-t-2 border-gray-300 mb-4"></div>


        <h1 className='text-3xl font-bold text-white'> ABOUT ME</h1>
        <div className="p-3 sm:p-2 w-full sm:w-96 mt-2  max-w-md mx-auto">
          <p className="text-justify text-white px-12 text-lg">
            I&apos;m Hafiz Umar Qureshi, a Computer Science and Software Engineering graduate from NED University. I&apos;m passionate about technology and aim to create helpful solutions through my work.
          </p>
        </div>


        {/* Horizontal Line Below */}
        <div className="w-1/2 border-t-2 border-gray-300 mt-4"></div>


      </div>

      <div className='grid grid-cols-1 gap-12 px-24 mt-2'>

        {/* <div className='flex justify-end'>

          <Image src={"/Umar.jpeg"} alt='Umar' width={300} height={300} className='rounded-full ' />

        </div> */}

        <div className='flex justify-center  sm:p-6'>

          <p className='text-white text-lg sm:text-base md:text-lg 
               sm:px-8 md:px-12 lg:px-24 xl:px-32 
              max-w-[100%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-[70%]
              text-justify leading-relaxed sm:leading-loose
              mx-auto'>
            As a Web Developer, I enjoy building websites that are both user-friendly and visually appealing.
            Along with my web development skills, I have experience in designing modern and creative layouts,
            improving website visibility through SEO, and creating cross-platform mobile applications using Flutter.
            Additionally, I have a strong interest in Artificial Intelligence (AI) and Machine Learning (ML),
            and I enjoy working on projects that integrate smart, data-driven solutions.
            I am passionate about turning ideas into fully functional projects that make a real impact.
            Whether it's crafting a responsive website, optimizing it for search engines, developing a mobile app,
            or implementing AI and ML solutions, I love helping businesses grow and succeed in the digital world.
          </p>
        </div>


      </div>



      <div className='flex flex-col lg:flex-row gap-10 lg:gap-20 mt-8 lg:mt-10 '>

        {/* Education Section */}
        <div className='lg:ml-12 xl:ml-20 px-4 sm:px-6 md:px-8 lg:px-0 '>
          <div className='lg:ml-12 xl:ml-16 text-white'>
            <div className=' text-center '>
              <h1 className='text-3xl md:text-2xl lg:text-3xl font-bold text-white mt-4 lg:mt-6'>EDUCATION:</h1>
            </div>

            <div className='p-2 md:p-4 space-y-4 md:space-y-6 ml-20 '>
              {[
                {
                  dates: "May 2010 - Dec 2012",
                  title: "Hafiz e Quran",
                  institution: "Iqra Jamia Rouza Tul Atfal"
                },
                {
                  dates: "Mar 2015 - June 2017",
                  title: "Intermediate, Pre-Engineering",
                  institution: "FG Boys Inter College Karachi"
                },
                {
                  dates: "Feb 2018 - Mar 2022",
                  title: "Bachelors, CSIT",
                  institution: "BBSUL Karachi"
                },
                {
                  dates: "Feb 2024 - Present",
                  title: "Web 3, AI, & Metaverse",
                  institution: "Governor's Initiative for Artificial Intelligence & Computing"
                }
              ].map((item, index) => (
                <div key={index} className='space-y-2'>
                  <div className='flex items-center'>
                    <div className='w-2 h-2 bg-amber-400 rounded-full mr-2'></div>
                    <span className='text-sm md:text-base'>{item.dates}</span>
                  </div>
                  <h2 className='font-bold text-lg md:text-xl text-amber-400 pl-4'>{item.title}</h2>
                  <p className='text-sm md:text-base pl-4'>{item.institution}</p>
                  {index < 3 && <br className='hidden md:block' />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section - Hidden on mobile and tablet */}
        <div className='hidden md:hidden lg:block  lg:ml-8 xl:ml-12 '>
          <Image src="/Cap.png" alt='cap' width={400} className='mt-6 lg:mt-10 ml-44 w-[300px] lg:w-[350px] xl:w-[400px]' height={300}
          />
        </div>
      </div>

      <section id="Skills" />

      <br /> <br /> <br /> <br />




      <div>



        <div className='flex flex-col items-center '>

          {/* Horizontal Line Above */}
          {/* <div className="w-1/2 border-t-2 border-gray-300 mb-4"></div> */}

          <h1 className='text-3xl font-bold text-white '> SKILLS</h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-7xl mx-auto'>


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

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-8 gap-10 mt-12'>


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




        <div className='flex flex-col bg-sky-900 text-white gap-6 py-8 px-4 md:px-8 lg:px-16'>
          <div className='flex flex-col items-center mb-4'>
            <h1 className='text-2xl md:text-3xl font-bold text-white'>CONTACT ME</h1>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6'>
            {/* Email Section */}
            <div className='flex items-center w-full max-w-xs md:max-w-none'>
              <div className='w-10 md:w-12 flex-shrink-0'>
                <Image
                  src={"/communication.png"}
                  alt='Email'
                  width={40}
                  height={40}
                  className='w-full h-auto'
                />
              </div>
              <span className='mx-2'>:</span>
              <p className='text-sm md:text-base break-all'>
                qureshiumer776@gmail.com
              </p>
            </div>

            {/* Phone Section */}
            <div className='flex items-center w-full max-w-xs md:max-w-none'>
              <div className='w-10 md:w-12 flex-shrink-0'>
                <Image
                  src={"/phone.png"}
                  alt='call'
                  width={40}
                  height={40}
                  className='w-full h-auto'
                />
              </div>
              <span className='mx-2'>:</span>
              <p className='text-sm md:text-base'>
                0348-2500818
              </p>
            </div>

            {/* Address Section */}
            <div className='flex items-center w-full max-w-xs md:max-w-none'>
              <div className='w-10 md:w-12 flex-shrink-0'>
                <Image
                  src={"/map.png"}
                  alt='map'
                  width={40}
                  height={40}
                  className='w-full h-auto'
                />
              </div>
              <span className='mx-2'>:</span>
              <p className='text-sm md:text-base'>
                Massan Road Near Shireen Jinnah Colony, Clifton, Karachi
              </p>
            </div>
          </div>
        </div>



        <br />


        <Footer />



      </div>

    </div>
  );
}
