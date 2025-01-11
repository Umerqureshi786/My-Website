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


            <div className='flex justify-between px-8  bg-sky-950  '>



                <div className='mt-8'>
                    <p className='text-white ml-20'>Portfolio Website © 2025 Designed by <b > Umar Qureshi</b> </p>
                </div>

                <div className=' flex gap-4 mr-48 mb-4 mt-8'>
                    <h1 className='mt-1 font-semibold text-white'>Social Links:</h1>

                    <div>
                        <Image src={"/Facebook.png"} alt='facebook' height={30} width={30} />

                    </div>

                    <div>
                        <Image src={"/instagram.png"} alt='instagram' height={30} width={30} />

                    </div>

                    <div>
                        <Image src={"/linkedin.png"} alt='linkedin' height={30} width={30} />

                    </div>

                    <div>
                        <Image src={"/youtube.png"} alt='youtube' height={30} width={30} />

                    </div>

                    <div>
                        <Image src={"/whatsapp.png"} alt='whatsapp' height={30} width={30} />

                    </div>





                </div>
            </div>




        </div>
    )
}
