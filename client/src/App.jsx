import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';
import Planner from './pages/Planner';
import Goals from './pages/Goals';
import DailyView from './pages/DailyView';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className='h-screen flex flex-col font-sans'>
      <header className='h-16 w-full border-b'><Navbar /></header>
      <div className='flex flex-1'> 
        <aside className='w-56 h-full border-r'><Sidebar /></aside>
        <main className='flex-1 overflow-auto p-4'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/daily" element={<DailyView />} />
          </Routes>
        </main>
      </div>
      <footer className='h-8 w-full border-t flex items-center justify-center'>Copyright 2025</footer>
    </div>
  )
}

export default App
