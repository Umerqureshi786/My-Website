import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex justify-between bg-sky-950 py-4 px-10 '>

            <div>
                <h1 className="text-white text-2xl font-bold">Umar </h1>
            </div>

            <div className='flex gap-12 text-white mr-6 text-lg sm:gap-4'>
                <a href="#" className='hover:bg-black border border-white px-3 py-1 rounded-lg hover:active:text-sky-200'>About</a>
                <a href="#" className='hover:bg-black border border-white px-3 py-1 rounded-lg hover:active:text-sky-200'>Skills</a>
                <a href="#" className='hover:bg-black border border-white px-3 py-1 rounded-lg hover:active:text-sky-200'>work</a>
                <a href="#" className='hover:bg-black border border-white px-3 py-1 rounded-lg hover:active:text-sky-200'>Contact</a>
            </div>


        </div>
    )
}
