import React from 'react'
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col px-2 py-4 mx-auto justify-between sm:flex-row text-center text-cwhite w-full h-30 static bottom-0 bg-cdarkgreen">
      <p className="py-4">2023 Thyme for Lunch - All rights reserved</p>
      <a
        className="flex justify-between sm:w-[300px] pt-4 text-2xl "
        href="https://github.com/Esztergb/Thyme-for-Lunch"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default Footer