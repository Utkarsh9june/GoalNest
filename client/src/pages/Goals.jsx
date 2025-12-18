import React, { useEffect, useState } from 'react';
import GoalsCard from '../components/GoalsCard';
import api from '../utils/axios';
import { API_PATHS } from '../utils/apiPaths';

const Goals = () => {
  const [status, setStatus] = useState("Not-Started");
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      const res = await api.get(API_PATHS.GOAL.GETGOALS, {
        withCredentials: true,
      });
      setGoals(res.data);
    }
    fetchGoals();
  }, []);

  const filteredGoals = goals.filter(
    (goal) => goal.status === status
  )

  return (
    <div className='mt-10 border p-4 flex flex-col rounded-lg'>
      <div className='flex flex-row justify-between mb-4'>
      <h2 className='text-3xl font-bold flex'>Goals Overview</h2>
      <div className='flex gap-4 font-semibold'>
        {["Not-Started", "In-Progress", "Completed", "Overdue"].map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded-lg ${status === t ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}
            onClick={() => setStatus(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      </div>
      <div className='flex flex-col gap-4'>
        {filteredGoals.length === 0 ? (
          <p className='text-gray-500'>No {status} goals</p>
        ) : (
          filteredGoals.map((goal) => (
            <GoalsCard
              goalId={goal._id}
              title={goal.title}
              description={goal.description}
              category={goal.tags}
              status={goal.status}
              due={goal.timeline}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Goals
