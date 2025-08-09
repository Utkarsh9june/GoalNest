import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';
import Planner from './components/Planner';
import Goals from './components/Goals';
import DailyView from './components/DailyView';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className='h-screen flex flex-col font-sans'>
      <header className='h-16 w-full border-b '><Navbar /></header>
      <div className='flex flex-1'> 
        <aside className='w-56 border-r'><Sidebar /></aside>
        <main className='flex-1 h-full overflow-auto p-4'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/daily" element={<DailyView />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
