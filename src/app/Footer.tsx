import React from 'react'
import Image from 'next/image'
export const Footer = () => {
    return (
        <div>

            <div className='flex justify-evenly  p-4 bg-slate-900 text-white'>
                <div className=' w-96 mt-14'>
                    <h1 className='font-bold text-2xl'>Umar Qureshi</h1>
                    <p className='mt-4'>Crafted with passion and dedication, this website is a reflection of my journey, skills, and commitment to excellence in every project I undertake!</p>
                </div>

                <div className='mt-4 flex flex-col gap-3'>

                    <h1 className='text-2xl font-semibold w-max'>Quick Links</h1>
                    <a href="#" className=''>About</a>
                    <a href="#">Skills</a>
                    <a href="#">Work</a>
                    <a href="#">Contact</a>

                </div>


                <div className='mt-4 flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold w-max'>My Services</h1>
                    <a href="#" className=''>Web Development</a>
                    <a href="#">App Development</a>
                    <a href="#">Web Designing</a>
                    <a href="#">Search Engine Optimization</a>
                    <a href="#">Digital Marketing</a>
                    <a href="#">Graphic Designing</a>
                </div>


                <div className='mt-4 flex flex-col  gap-3'>
                    <h1 className='text-2xl font-semibold w-max'>About</h1>
                    <a href="#" className=''>Privacy Policy</a>
                    <a href="#">Hire Me</a>
                    <a href="#">Terms & Conditions</a>


                    
                </div>

                
            </div>

<div className=' flex justify-center gap-4  mb-4 mt-8'>


            <div className='mb-4'>
              <a href="https://www.facebook.com/umer.lilly.9/" target='blank'> <Image src={"/Facebook.png"} alt='facebook' height={40} width={40} /> </a>

            </div>

            <div>
              <a href="https://www.instagram.com/umer.qurexhi0?igsh=eW1mNjk4NjNsOHQx" target='blank'> <Image src={"/instagram.png"} alt='instagram' height={40} width={40} /> </a>

            </div>

            <div>
              <Image src={"/linkedin.png"} alt='linkedin' height={40} width={40} />

            </div>

            <div>
              <a href="https://www.youtube.com/@Hafizumar776" target='blank'><Image src={"/youtube.png"} alt='youtube' height={40} width={40} /> </a>

            </div>

            <div>
              <Image src={"/whatsapp.png"} alt='whatsapp' height={40} width={40} />

            </div>

          </div>






            <div className='flex justify-between  bg-sky-950  '>

                <div className=' w-full text-center'>
                    <p className='text-white mt-4 mb-4'>UMAR_QURESHI copyright © 2025 </p>
                </div>

            </div>




        </div>
    )
}
