import React, { useEffect, useState } from 'react'
import api from '../utils/axios'
import { API_PATHS } from '../utils/apiPaths'

const Productivity = () => {
  const [goals, setGoals] = useState([])

    useEffect(() => {
      const fetchGoals = async () => {
        const res = await api.get(API_PATHS.GOAL.GETSTATS, {
          withCredentials: true,
        })
        setGoals(res.data)
      }
      fetchGoals()
    }, [])

  return (
    <div className="grid grid-cols-5 gap-4 text-center mt-10 rounded-lg bg-white">

        {/* Total Active Goals */}
        <div className="p-4 bg-slate-50 rounded-lg">
          <p className="text-2xl font-bold text-slate-700">{goals.activeGoals}</p>
          <p className="text-md font-semibold text-gray-600">Active Goals</p>
          <p className="text-sm text-gray-500 mt-1">Currently In Progress</p>
        </div>

        {/* Deadline Driven */}
        <div className="p-4 bg-indigo-50 rounded-lg">
          <p className="text-2xl font-bold text-indigo-600">{goals.deadlineDriven}</p>
          <p className="text-md font-semibold text-gray-600">Deadline Driven</p>
          <p className="text-sm text-gray-500 mt-1">Goals With Due Dates</p>
        </div>

        {/* High Impact Goals */}
        <div className="p-4 bg-orange-50 rounded-lg">
          <p className="text-2xl font-bold text-orange-600">{goals.highImpact}</p>
          <p className="text-md font-semibold text-gray-600">High Impact</p>
          <p className="text-sm text-gray-500 mt-1">Priority: High</p>
        </div>

        {/* Completion Momentum */}
        <div className="p-4 bg-emerald-50 rounded-lg">
          <p className="text-2xl font-bold text-emerald-600">{goals.goalsCompleted}</p>
          <p className="text-md font-semibold text-gray-600">Goals Completed</p>
          <p className="text-sm text-gray-500 mt-1">Overall Goals</p>
        </div>

        {/* Focus Balance */}
        <div className="p-4 bg-violet-50 rounded-lg">
          <p className="text-2xl font-bold text-violet-600">{goals.notStarted}</p>
          <p className="text-md font-semibold text-gray-600">Not Started</p>
          <p className="text-sm text-gray-500 mt-1">Goals in Backlog</p>
        </div>

      </div>
  )
}

export default Productivity