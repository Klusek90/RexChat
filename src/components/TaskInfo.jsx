import React from 'react'

const TaskInfo = () => {
  return (
    <div className="flex flex-col space-y-4 absolute top-0 right-0 h-screen bg-black w-1/14">
      <button className="bg-blue-500 text-white py-2 px-4 rounded">Button 1</button>
      <button className="bg-green-500 text-white py-2 px-4 rounded">Button 2</button>
      <button className="bg-red-500 text-white py-2 px-4 rounded">Button 3</button>
    </div>
  )
}

export default TaskInfo