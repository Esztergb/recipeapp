import React, {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/outline'

function Navbar() {
// swich over from regular menu to hamburger menu
const [nav, setNav] = useState(false); //default
const handleClick = () => setNav(!nav);

// const handleClose = () => setNav(!nav);
let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/signup`; 
    navigate(path);
  }

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-md bg-cgreen">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* Brand */}
          <img className="h-12 w-12 mr-4" src="/thyme.svg" alt="thyme logo"/>
          <h1 className="text-3xl font-bold mr-4 sm:text-4 text-cwhite">
            Thyme fot Lunch
          </h1>
          {/* Menu */}
          <ul className="hidden md:flex">
            <li className='hover:scale-110'> <Link to='/' className='cursor-pointer'>Recipies</Link></li>
            <li className='hover:scale-110'> <Link to='/calendar' className='cursor-pointer'>Calendar</Link></li>
            <li className='hover:scale-110'> <Link to='/shopping' className='cursor-pointer'>Shopping List</Link></li>
          </ul>
        </div>
        {/* sign in/Sign up buttons */}
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-cbrown mr-4">
            Sign In
          </button>
          <button className="px-8 py-3" onClick={routeChange}>Sign Up</button>
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
      <ul className={!nav ? "hidden" : "md:hidden absolute bg-cgreen w-full px-8"}>
        <li className="border-b-2 border-cdarkgreen w-full">Recipies</li>
        <li className="border-b-2 border-cdarkgreen w-full">Calendar</li>
        <li className="border-b-2 border-cdarkgreen w-full">Shopping List</li>
       {/* buttons */}
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