import React from 'react';
import { Bell, Home, Mail, Search } from 'react-feather';

function Navigation() {
  return (
      <nav className='fixed bottom-0 w-screen border-t border-zinc-200 transition duration-300 dark:bg-black dark:text-zinc-300'>
        <ul className='flex justify-evenly w-full'>
          <li className='w-1/4 py-3'><button className='flex justify-center w-full h-full'><Home /></button></li>
          <li className='w-1/4 py-3'><button className='flex justify-center w-full h-full'><Search /></button></li>
          <li className='w-1/4 py-3'><button className='flex justify-center w-full h-full'><Bell /></button></li>
          <li className='w-1/4 py-3'><button className='flex justify-center w-full h-full'><Mail /></button></li>
        </ul>
      </nav>
  );
}

export default Navigation;
