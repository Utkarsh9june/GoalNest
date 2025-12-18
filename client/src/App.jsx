import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  const location = useLocation();
  const hideLayout = ['/login', '/signup'].includes(location.pathname);

  return (
    <div className='h-screen flex flex-col font-sans'>
      {!hideLayout && (
        <header className='h-16 w-full border-b'><Navbar /></header>
      )}
        <main className='flex-1 overflow-auto p-4 m-5'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </main>
        {!hideLayout && (
          <footer className='h-8 w-full border-t flex items-center justify-center'>Copyright 2025</footer>
        )}
    </div>
  )
}

export default App
