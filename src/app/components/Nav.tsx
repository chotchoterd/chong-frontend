import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <ul className="flex justify-center p-4 bg-sky-800">
      <li className="mx-3 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">Home</Link></li>
      <li className="mx-3 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">Services</Link></li>
      <li className="mx-3 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">About</Link></li>
      <li className="mx-3 rounded hover:bg-gray-200 py-1 px-3 text-white hover:text-black font-bold"><Link style={{ fontSize: '18px' }} href="#">Contact</Link></li>
    </ul>
  );
}

export default Nav;
