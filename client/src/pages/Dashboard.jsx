import React from 'react'
import ProgressCard from '../components/ProgressCard';
import { FaBullseye } from "react-icons/fa";
import { GrInProgress } from "react-icons/gr";
import { SiTicktick } from "react-icons/si";
import { LuTimer } from "react-icons/lu";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Dashboard = () => {
  return (
    <div>
       {/* Header Section */}
      <h1 className='text-3xl font-bold'>Welcome Back, Utkarsh!</h1>
      <p className='mt-4 text-lg'>Here's your personalized overview.</p>
      
       {/* Progress Cards Section */}
      <div className='grid grid-cols-2 mt-3 mr-4 justify-between w-full gap-4'>
        <ProgressCard
          icon={FaBullseye}
          title="Quarterly Goals"
          description="Track your progress towards your quarterly goals."
          current={3}
          total={5}
          statusicon={SiTicktick}
          statusText="Completed"
          statusColor="#22c55e"
          onViewDetails={() => alert('View Details Clicked')}
        />
        <ProgressCard
          icon={FaBullseye}
          title="Monthly Goals"
          description="Track your progress towards your monthly goals."
          current={3}
          total={5}
          statusicon={GrInProgress}
          statusText="In Progress"
          statusColor="#d4c706"
          onViewDetails={() => alert('View Details Clicked')}
        />
        <ProgressCard
          icon={FaBullseye}
          title="Sprint Goals"
          description="Track your progress towards your quarterly goals."
          current={3}
          total={5}
          statusicon={LuTimer}
          statusText="Overdue"
          statusColor="#ff0000"
          onViewDetails={() => alert('View Details Clicked')}
        />
        <ProgressCard
          icon={FaBullseye}
          title="Daily Goals"
          description="Track your progress towards your quarterly goals."
          current={3}
          total={5}
          statusicon={SiTicktick}
          statusText="Completed"
          statusColor="#22c55e"
          onViewDetails={() => alert('View Details Clicked')}
        />
      </div>

      {/* Quick Productivity Stats Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mr-12 border mt-10">
        <h3 className="text-2xl font-bold mb-4">Quick Productivity Stats</h3>
        <div className="grid grid-cols-5 gap-4 text-center">
          {/* Tasks Completed */}
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-2xl font-bold text-green-600">85%</p>
            <p className="text-sm text-gray-600">Tasks Completed</p>
            <p className="text-xs text-gray-500 mt-1">This Week</p>
          </div>

          {/* Goals Achieved */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-sm text-gray-600">Goals Achieved</p>
            <p className="text-xs text-gray-500 mt-1">This Month</p>
          </div>

          {/* Longest Streak */}
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-2xl font-bold text-yellow-600">7 Days</p>
            <p className="text-sm text-gray-600">Longest Streak</p>
            <p className="text-xs text-gray-500 mt-1">Daily Completion</p>
          </div>

          {/* Avg. Daily Tasks */}
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">6</p>
            <p className="text-sm text-gray-600">Avg. Daily Tasks</p>
            <p className="text-xs text-gray-500 mt-1">Last 30 Days</p>
          </div>

          {/* Completion Rate */}
          <div className="p-4 bg-pink-50 rounded-lg">
            <p className="text-2xl font-bold text-pink-600">92%</p>
            <p className="text-sm text-gray-600">Completion Rate</p>
            <p className="text-xs text-gray-500 mt-1">Of All Planned Tasks</p>
          </div>
          </div>
      </div>

      {/* Upcoming and Overdue Tasks Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg border mt-10 mr-12">
        <h3 className="text-2xl font-bold mb-4">Upcoming & Overdue Tasks</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="pb-2">Task</th>
              <th className="pb-2">Due Date</th>
              <th className="pb-2">Priority</th>
              <th className="pb-2">Category</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Finalize Q3 Report</td>
              <td className="py-2 text-red-500 font-semibold">Sep 30</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-600">High</span>
              </td>
              <td className="py-2">Work</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-red-200 text-red-700">Overdue</span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-2">Plan October Content</td>
              <td className="py-2">Oct 5</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-600">Medium</span>
              </td>
              <td className="py-2">Work</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-600">In Progress</span>
              </td>
            </tr>

            <tr className="border-b">
              <td className="py-2">Review Monthly Budget</td>
              <td className="py-2">Oct 10</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">Low</span>
              </td>
              <td className="py-2">Finance</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">Pending</span>
              </td>
            </tr>

            <tr>
              <td className="py-2">Schedule Team Standup</td>
              <td className="py-2">Oct 12</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-600">Low</span>
              </td>
              <td className="py-2">Work</td>
              <td className="py-2">
                <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-600">Upcoming</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
