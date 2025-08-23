import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className='border p-4'>
      <h2 className='text-3xl font-bold'>Profile Information</h2>      
      <div className='flex mt-4 items-center'>
        <FaRegUserCircle className='text-5xl text-gray-600 m-4' />
        <button className='border rounded-lg p-4 text-md font-medium h-[50px] font-semibold ml-8'>Upload Image</button>
      </div>
      <form className='flex flex-col mt-4 ml-4'>
        <div className="grid grid-cols-2 gap-6 w-full">
          <div>
            <label className='text-md font-medium'>Name</label>
            <input 
              type='text' 
              className='border rounded-lg p-2 mt-2 w-full'
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className='text-md font-medium'>Email</label>
            <input 
              type='email' 
              className='border rounded-lg p-2 mt-2 w-full'
              placeholder="Enter your email"
            />
          </div>
        </div>

        <label className='text-md font-medium mt-4'>Bio</label>
        <textarea className='border rounded-lg p-2 mt-2' rows='4'></textarea>

        <div className='flex justify-end'>
          <button className='border w-[250px] bg-blue-500 hover:bg-blue-400 text-white rounded-lg p-2 text-md font-medium h-[50px] font-semibold mt-4 '>Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default Profile
