import React from "react";

export const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between sticky top-0 z-50 shadow-xl bg-sky-950 py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">

            {/* Logo Section */}
            <div className=" ml-24 ">
                <h1 className="text-white text-xl sm:text-2xl font-bold">Hafiz Umar Qureshi</h1>
            </div>

            {/* Links Section */}
            <div className="flex gap-4 sm:gap-6 text-white text-xs sm:text-sm md:text-base lg:text-lg mt-4 sm:mt-0  ml-14">
                <a href="#About" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 sm:px-3 md:px-4">About</a>

                <a href="#Skills" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 sm:px-3 md:px-4">Skills</a>

                <a href="#Work" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 sm:px-3 md:px-4">Work</a>

                <a href="#Contact" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 sm:px-3 md:px-4">Contact</a>
            </div>
        </div>
    );
};