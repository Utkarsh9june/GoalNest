import React from 'react'

const GoalsCard = ({title, category, status, due, progress}) => {
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
    <div className='border rounded-xl shadow-sm p-4 space-y-2'>
      {/* Category */}
      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-base font-semibold">{title}</h3>

      {/* Status */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span className={`w-2 h-2 rounded-full ${getStatusColor()}`}></span>
        {status}
      </div>

      {/* Due Date */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="material-icons text-sm">event</span>
        Due: {due}
      </div>

      {/* Progress */}
      <div>
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{progress}% Completed</p>
      </div>

      {/* Button */}
      <button className="w-full border rounded-lg py-1.5 text-sm font-medium hover:bg-gray-100">
        View Details
      </button>
    </div>
  )
}

export default GoalsCard
