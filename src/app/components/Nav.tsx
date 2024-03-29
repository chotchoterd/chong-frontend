
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Nav() {
  
  return (
    <div className="w-full max-w-screen-xl mx-auto p-3 md:py-3 bg-sky-800 shadow">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="./" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <img src="/food.png" className="h-16" alt="food" />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-white">CHONG FIFI</span>
        </a>
        <ul className="flex flex-col sm:flex-row p-4 bg-sky-800">
          <li className="mx-3 my-2 sm:my-0 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">Home</Link></li>
          <li className="mx-3 my-2 sm:my-0 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">Services</Link></li>
          <li className="mx-3 my-2 sm:my-0 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">About</Link></li>
          <li className="mx-3 my-2 sm:my-0 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
