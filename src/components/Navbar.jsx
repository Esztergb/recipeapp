import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function Navbar() {
// swich over from regular menu to hamburger menu
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-md bg-cgreen">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* Brand */}
          <h1 className="text-3xl font-bold mr-4 sm:text-4 text-cwhite">
            Thyme fot Lunch
          </h1>
          {/* Menu */}
          <ul className="hidden md:flex">
            <li>Recipies</li>
            <li>Calendar</li>
            <li>Shopping List</li>
          </ul>
        </div>
        {/* sign in/Sign up buttons */}
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-cbrown mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        {/* Hamburger menu */}
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-5 text-cbrown" />
          ) : (
            <XIcon className="w-5 text-cbrown" />
          )}
        </div>
      </div>

      {/* this div is part of the Hamburger Menu... */}
      <ul className={!nav ? "hidden" : "absolute bg-cgreen w-full px-8"}>
        <li className="border-b-2 border-cdarkgreen w-full">Recipies</li>
        <li className="border-b-2 border-cdarkgreen w-full">Calendar</li>
        <li className="border-b-2 border-cdarkgreen w-full">Shopping List</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-cbrown px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar