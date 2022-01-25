import React, { useContext } from 'react';
import { Moon } from 'react-feather';
import { globalContext } from '../context/GlobalStore';

function MenuDrawer() {
  const { globalState, dispatch } = useContext(globalContext)
  const { isMenuOpen, isDarkMode } = globalState

  const closeMenu = () => {
    dispatch({ type: 'MENU_TOGGLE' })
  }

  const toggleDarkMode = () => {
    dispatch({ type: 'DARK_TOGGLE' })
  }

  return (
    <section className={`z-50 w-screen h-screen absolute top-0 left-0 flex ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      {/* menu area */}
      <div className={`w-2/3 h-full bg-white dark:bg-black transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} px-5`}>
        <div className='border-b border-zinc-200 py-4'>
          <div className='flex text-sm items-center justify-between'>
            <div className='w-auto flex items-center dark:text-zinc-300'>
              <Moon />
              <span className='inline-block ml-3'>Dark Mode</span>
            </div>
            <div className={`relative w-12 h-6 transition duration-200 ease-linear rounded-full ${isDarkMode ? 'bg-green-400' : 'bg-gray-400'}`}>
            <label htmlFor="toggle" className={`absolute left-0 w-6 h-6 mb-2 transition duration-100 ease-linear transform bg-white border-2 rounded-full cursor-pointer ${isDarkMode ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400'}`}></label>
              <input
                type="checkbox"
                id="toggle"
                name="toggle"
                className="w-full h-full appearance-none focus:outline-none"
                onChange={toggleDarkMode}
              />
            </div>
          </div>
        </div>
      </div>
      {/* dark area, click to close */}
      <div className={`w-1/3 h-full bg-zinc-800 transition-opacity ${isMenuOpen ? 'opacity-50' : 'opacity-0'}`} onClick={closeMenu}></div>
    </section>
  );
}

export default MenuDrawer;
