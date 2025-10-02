import React, { use, useState } from 'react';
import GoalsCard from '../components/GoalsCard';

const Goals = () => {
  const[timeline, setTimeline] = useState("daily");
  return (
    <div className='mt-10 border p-4 flex flex-col rounded-lg'>
      <div className='flex flex-row justify-between'>
      <h2 className='text-3xl font-bold flex '>Goals Overview</h2>
      <div className='flex gap-4 font-semibold'>
        {["daily", "Weekly", "monthly", "quarterly"].map((t) => (
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
      <div className='flex flex-col'>
        <h3 className='text-2xl font-bold mb-5 mt-8'>Quarterly Goals</h3>
          <GoalsCard
            title="Launch Ascend v1.0 Beta"
            category="Personal"
            status="in-progress"
            due="2023-10-15"
          />
        <h3 className='text-2xl font-bold mb-4 mt-8'>Monthly Goals</h3>
          <GoalsCard
            title="Goal 1"
            category="Personal"
            status="Not-started"
            due="2023-10-15"
          />
          <h3 className='text-2xl font-bold mb-4 mt-8'>Weekly Goals</h3>
          <GoalsCard
            title="Goal 1"
            category="Personal"
            status="Completed"
            due="2023-10-15"
          />
          <h3 className='text-2xl font-bold mb-4 mt-8'>Daily Goals</h3>
          <GoalsCard
            title="Goal 1"
            category="Personal"
            status="Overdue"
            due="2023-10-15"
          />
      </div>
    </div>
  )
}

export default Goals
