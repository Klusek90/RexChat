import React from 'react'

const TaskInfo = () => {
  return (
    <div className="flex flex-col absolute top-0 right-0 h-screen bg-black w-1/14">

      <a className='pt-10'>Assign to:</a>
      <p>Development</p>

      <a className='pt-5'>Task</a>
      <p className=' text-3xl font-bold'>260028</p>
      <button className="bg-gray-500 text-white py-2 px-4 rounded mb-12">Copy</button>
      
      <button className="bg-green-500 text-white py-2 px-4 rounded mb-4">Play</button>
      <button className="bg-yellow-500 text-white py-2 px-4 rounded mb-4">Pause</button>
      <button className="bg-red-500 text-white py-2 px-4 rounded mb-4">Stop</button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mb-12">Clock</button>
      <button className="bg-gray-200 text-black py-2 px-4 rounded mb-4">Branch</button>
      <button className="bg-gray-400 text-white py-2 px-4 rounded mb-4">Reaassgin</button>
      <button className="bg-gray-300 text-black py-2 px-4 rounded mb-4">Upload</button>
    </div>
  )
}

export default TaskInfo