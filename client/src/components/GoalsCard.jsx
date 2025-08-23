import React from 'react';
import { SlOptionsVertical } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";

const GoalsCard = ({
  title, 
  category, 
  status, 
  due, 
  progress
}) => {
    const getStatusColor = () => {
        switch (status) {
            case 'completed':
                return 'bg-green-500';
            case 'in-progress':
                return 'bg-blue-500';
            case 'not-started':
                return 'bg-red-500';
            case 'overdue':
                return 'bg-orange-500';
            default:
                return 'bg-gray-500';
        }
    }
  return (
    <div className='border w-[250px] h-[250px] justify-betweeen rounded-xl shadow-sm p-4'>
      <div className='flex flex-row justify-between items-center mb-4'>
        {/* Category */}
        <span className="flex text-sm px-2 py-1 rounded-lg bg-gray-200 text-gray-700 font-medium ">
          {category}
        </span>
        {/* Three Dots */}
        <button className="flex material-icons text-sm"><SlOptionsVertical /></button>
      </div>

      {/* Title */}
      <h3 className="text-base text-lg flex font-semibold mb-4">{title}</h3>

      {/* Status */}
      <div className="flex items-center gap-2 text-md text-gray-500 mb-3">
        <span className={`w-2 h-2 rounded-full ${getStatusColor()}`}></span>
        {status}
      </div>

      {/* Due Date */}
      <div className="flex items-center gap-2 text-md text-gray-600">
        <span className="material-icons text-sm"><FaRegCalendarAlt /></span>
        Due: {due}
      </div>

      {/* Button */}
      <button className="mt-5 w-full border rounded-lg py-2 text-md font-medium hover:bg-gray-100">
        View Details
      </button>
    </div>
  )
}

export default GoalsCard
