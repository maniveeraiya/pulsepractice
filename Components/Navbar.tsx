import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='top-0 sticky grid grid-cols-2 py-12 '>
      {/* left logo */}
      <div className='relative flex items-center h-16'>
        <Image
          src='/pulse-logo.svg'
          alt='logo'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Right menuitems */}
      <div className='flex justify-end items-center'>
        <ul className='flex space-x-14 font-bold text-xl text-[#00ad6a] items-center'>
          <li>
            <a className='cursor-pointer' href='/'>
              Features
            </a>
          </li>
          <li>
            <a className='cursor-pointer' href='/'>
              Customer Stories
            </a>
          </li>
          <li>
            <a className='cursor-pointer' href='/'>
              Pricing
            </a>
          </li>
          <li>
            <a className='cursor-pointer' href='/'>
              Blog
            </a>
          </li>
          {/* button */}
          <button className='border-2 px-4 py-1 border-[#00ad6a] hover:bg-[#00ad6a] hover:text-white transition duration-300 ease-in-out hover:scale-110'>
            Sign Up
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
