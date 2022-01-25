import React from 'react';
import MenuDrawer from './components/MenuDrawer';
import Navigation from './components/Navigation';
import ProfileHeader from './components/ProfileHeader';
import { GlobalStore } from './context/GlobalStore';

function App() {
  return (
    <GlobalStore>
      <main className='h-screen transition duration-300 dark:bg-black'>
        <ProfileHeader />
        <Navigation />
        <MenuDrawer />
      </main>
    </GlobalStore>
  );
}

export default App;
