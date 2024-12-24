import Image from 'next/image';
import { Navbar } from './Navbar'; // Import your Navbar component

export default function ImageBelowNavbar() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}


      <div className="h-16">
        <Navbar />
      </div>

      {/* Full-Screen Background Image Below Navbar */}
      <div className="flex-grow relative">
        <Image
          src="/Background.jpg"
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Over the Image */}
      <div className="absolute inset-0 flex mt-[20%] mr-[20%]  justify-center text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Hello, I'm </h1>
          <h1 className='text-4xl font-bold'>Umar Qureshi</h1>
          <p className="mt-4 text-2xl text-amber-300 font-bold ">Full Stack Developer</p>



          <div>
            
          </div>

        </div>

      </div>


      <p>jkjklj</p>



    </div>
  );
}
