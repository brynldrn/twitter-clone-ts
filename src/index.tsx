import React from 'react';
import ReactDOM from 'react-dom';
import MenuDrawer from './components/MenuDrawer';
import Navigation from './components/Navigation';
import ProfileHeader from './components/ProfileHeader';
import { GlobalStore } from './context/GlobalStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStore>
      <main className='h-screen transition duration-300 dark:bg-black'>
        <ProfileHeader />
        <Navigation />
        <MenuDrawer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </BrowserRouter>
      </main>
    </GlobalStore>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
