import React, {useState} from 'react';
import Study from "../assets/Study.png"

const Planner = () => {
  return (
    <div>
      {/* Goals Planning Section */}
      <div className='mt-10 p-8 border rounded-lg'>
        <h2 className='text-2xl font-semibold'>Add a goal</h2>
        <p className='text-md mt-2'>Fill the details to set your new goal</p>
        <form className='text-lg flex flex-col mt-4'>
          <p className='mt-4'>Goal Title</p>
          <input type="text" placeholder='Enter your goal title' className='border-2 border-gray-300 p-2 rounded-lg mt-1'/>
          <p className='mt-4'>Description</p>
          <textarea placeholder='Enter your goal description' className='border-2 border-gray-300 p-2 rounded-lg mt-1'/>
          <div className='flex flex-row gap-8 mt-4 justify-between w-full'>
            <div className='flex flex-col w-1/2'>
              <p className='flex'>Timeline</p>
            <select name='Select a Timeline' className='border-2 border-gray-300 p-2 rounded-lg mt-1 flex bg-white'>
              <option value='select' selected>Select a timeline</option>
              <option value='daily'>Daily</option>
              <option value='sprint'>Sprint</option>
              <option value='month'>Month</option>
              <option value='quarter'>Quarterly</option>
            </select>
            </div>
            <div className='flex flex-col ml-4 w-1/2'>
              <p className='flex'>Priority</p>
              <select name='Select a Priority' className='border-2 border-gray-300 p-2 rounded-lg mt-1 flex bg-white'>
                <option value='select' selected>Select a priority</option>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
            </div>
          </div>
          <p className='flex mt-4'>Tags</p>
          <input type="text" placeholder='Enter tags separated by commas' className='border-2 border-gray-300 p-2 rounded-lg mt-1'/>
          <p className='flex mt-4'>Main Task</p>
          <select name='Select Main Task' className='border-2 border-gray-300 p-2 rounded-lg mt-1 flex bg-white w-full'>
            <option value='select' selected>Select a main task</option>
            <option value='task1'>Website Redesign</option>
            <option value='task2'>Marketing Campaign</option>
            <option value='task3'>Product Launch</option>
            <option value='task4'>Team Training</option>
          </select>
        </form>
        <div className='flex justify-end gap-4 mt-4'>
          <button className='bg-blue-500 text-white p-2 rounded-lg mt-4'>Add Goal</button>
          <button className='bg-gray-300 text-black p-2 rounded-lg mt-4'>Cancel</button>
        </div>
      </div>

    </div>
  )
}

export default Planner
