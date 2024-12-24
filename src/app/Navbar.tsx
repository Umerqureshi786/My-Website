import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex justify-between bg-sky-700 py-4 px-6'>

            <div>
                <h1 className='text-white text-xl font-bold'>Umar </h1>
            </div>

            <div className='flex gap-12 text-white mr-6 text-lg'>
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">work</a>
                <a href="#">Contact</a>
            </div>


        </div>
    )
}
