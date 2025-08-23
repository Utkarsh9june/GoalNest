import React from 'react';

const ProgressCard = ({
  icon:Icon,
  title,
  description,
  current,
  total,
  statusicon:StatusIcon,
  statusText,
  statusColor,
  onViewDetails,
}) => { 
    const progressPercentage = total > 0 ? (current / total) * 100 : 0;
  return (
    <div className='w-full border rounded-lg p-4 shadow-md bg-white mt-3'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
        {Icon && <Icon className="text-teal-600 w-4 h-4" />}
        <h2 className='text-xl font-semibold flex items-center'>
          <span>{title}</span>
        </h2>
        </div>
        <span className='px-3 py-1 text-xs mt-1 p-1 rounded-full text-white flex gap-1 items-center'
        style={{backgroundColor : statusColor}}>
          {StatusIcon && <StatusIcon />}
          {statusText}
        </span>
      </div>
      <p className='mt-3'>{description}</p>
      <div className='mt-4'>
        <div className='w-full bg-cyan-100 rounded-full h-2'>
          <div
            className='bg-teal-700 rounded-full h-2'
            style={{ width: `${progressPercentage}%` }} ></div>
            </div>
          <p className='text-xs text-gray-500 mt-1 text-right'>{current}/{total} ({progressPercentage}%)</p>
        </div>
        <button 
          className='mt-3 w-full p-2 cursor-pointer border'
          onClick={onViewDetails}>
          View Details
          </button>
      </div>
  )
}

export default ProgressCard;
