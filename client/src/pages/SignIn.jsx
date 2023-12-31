import React from 'react'

export default function SignIn() {
  return (
    <div className="w-full h-screen flex bg-cwhite md:flex md:justify-center mb-6">
    <div className="mt-[80px]">
    <form className="w-full max-w-sm">
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
      <input class="bg-cbrown appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cbrown" id="inline-full-name" type="text" placeholder='Jane Doe'></input>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
      <input class="bg-cbrown appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-cbrown" id="inline-password" type="password" placeholder="******************"></input>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3"></div>
    <label className="md:w-2/3 block text-gray-500 font-bold">
      <input className="mr-2 leading-tight" type="checkbox"></input>
      <span className="text-sm">
        Send me your newsletter!
      </span>
    </label>
    </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button className="text-cwhite border bg-cbrown border-cbrown
    hover:bg-transparent hover:text-cbrown rounded-md px-8 py-3" type="button">
        Sign In
      </button>
    </div>
  </div>
</form>
    </div>
  </div>
    
    
  );
}