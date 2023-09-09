import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import styled from "styled-components";


function Navbar() {
// swich over from regular menu to hamburger menu
const [nav, setNav] = useState(false); //default
const handleClick = () => setNav(!nav);

// const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-md bg-cgreen">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Nav>
            {/* <GiKnifeFork /> */}
            <Logo className="flex" to={"/"}>
              <img
                className="h-12 w-12 mr-4"
                src="/thyme.svg"
                alt="thyme logo"
              />
              <h1>Thyme for Lunch</h1>
            </Logo>
          </Nav>
             {/* <ul className="hidden md:flex">
            <li className="hover:scale-110">
              {" "}
              <Link to="/" className="cursor-pointer">
                Recipies
              </Link>
            </li>
            <li className="hover:scale-110">
              {" "}
              <Link to="/calendar" className="cursor-pointer">
                Calendar
              </Link>
            </li>
            <li className="hover:scale-110">
              {" "}
              <Link to="/shopping" className="cursor-pointer">
                Shopping List
              </Link>
            </li>
          </ul> */}
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
      <ul
        className={!nav ? "hidden" : "md:hidden absolute bg-cgreen w-full px-8"}
      >
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

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default Navbar