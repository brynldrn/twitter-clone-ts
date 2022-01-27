import React, { useContext } from 'react';
import { Loader } from 'react-feather'
import { globalContext } from '../context/GlobalStore';

function ProfileHeader() {
  const { dispatch } = useContext(globalContext)

  const handleProfileClick = () => {
    dispatch({ type: 'MENU_TOGGLE' })
  }

  return (
    <section className='flex justify-between items-center content-center p-3 border-b border-zinc-200 transition duration-300 md:hidden dark:bg-black'>
      <div className='flex items-center content-center'>
        <button onClick={handleProfileClick}><img src="http://placehold.it/46x46" alt="Profile" className='rounded-full w-8' /></button>
        <span className='inline-block ml-6 font-bold dark:text-zinc-300'>Home</span>
      </div>
      <button className='dark:text-zinc-300'><Loader /></button>
    </section>
  );
}

export default ProfileHeader;
