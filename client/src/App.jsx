import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className='h-screen flex flex-col font-sans'>
      <header className='h-16 w-full border-b'><Navbar /></header>
        <main className='flex-1 overflow-auto p-4 m-5'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      <footer className='h-8 w-full border-t flex items-center justify-center'>Copyright 2025</footer>
    </div>
  )
}

export default App
