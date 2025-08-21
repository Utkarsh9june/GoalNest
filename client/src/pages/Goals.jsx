import React, { use, useState } from 'react';
import GoalsTable from '../components/GoalsCard';

const Goals = () => {
  const[timeline, setTimeline] = useState("daily");
  return (
    <div className='mr-12 ml-4 p-4 flex flex-col rounded-lg'>
      <div className='flex flex-row justify-between'>
      <h2 className='text-3xl font-bold flex '>Goals Overview</h2>
      <div className='flex gap-4 font-semibold'>
        {["daily", "sprint", "monthly", "quarterly"].map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded-lg ${timeline === t ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setTimeline(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      </div>
      <div className='flex flex-col mt-10'>
        <h3 className='text-2xl font-bold mb-4'>Upcoming Goals</h3>
          
      </div>
    </div>
  )
}

export default Goals
