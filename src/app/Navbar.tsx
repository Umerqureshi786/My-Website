import React from "react";

export const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center justify-between sticky top-0 z-50 shadow-xl bg-sky-950 py-4 px-6 md:px-10">

            {/* Logo Section */}
            <div className="sm:text-center">
                <h1 className="text-white text-2xl font-bold  ">Hafiz Umar Qureshi</h1>
            </div>

            {/* Links Section */}
            <div className="flex gap-6 text-white text-sm sm:gap-4 sm:text-xs md:text-base lg:text-lg">
                <a href="#About" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 md:px-3 lg:px-4">About</a>

                <a href="#Skills" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 md:px-3 lg:px-4"> Skills</a>

                <a href="#Work" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 md:px-3 lg:px-4">Work</a>


                <a href="#Contact" className="hover:bg-black border-2 border-white px-2 py-1 rounded-lg hover:active:text-sky-200 md:px-3 lg:px-4 "> Contact </a>
            </div>
        </div>
    );
};
