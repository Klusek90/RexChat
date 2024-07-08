import React from 'react'
import { FaPlay,FaClock, FaUpload   } from "react-icons/fa";
import { TbPlayerPauseFilled, TbPlayerStopFilled  } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa6";


const TaskSideBar = () => {

  const pauseTask = () =>{
    console.log("task paused")
  }  
  const startTask = () =>{
    console.log("task start")
  }
  const stopTask = () =>{
    console.log("task stop")
  }
  const estimate = () =>{
    console.log("estimate time")
  }
  const createBranch = () =>{
    console.log("Branch created")
  }
  const uploadFile = () =>{
    console.log("FileUpload")
  }

  return (
    <aside className=' bg-gray-700 shadow-sm'>
        <div>
            <ul>
                <li ><p >Task</p></li>
                <li className='font-bold mb-1'><p>235645</p></li>
                <li ><button className='bg-purple-200 text-black p-5 mb-5 hover:bg-purple-400'onClick={createBranch} ><FaCodeBranch /></button></li>
                <li ><button className='bg-gray-200 text-black p-5 hover:bg-gray-400' onClick={uploadFile}><FaUpload /></button></li>
                <li className='my-10'></li>
                <li ><button className='bg-green-200 text-black p-5 text-center mb-1 hover:bg-green-400' onClick={startTask}> <FaPlay /></button></li>
                <li ><button className='bg-yellow-100 text-black p-5 mb-1 hover:bg-yellow-400' onClick={pauseTask}> <TbPlayerPauseFilled /></button></li>
                <li ><button className='bg-red-600 p-5 mb-1 hover:bg-red-800' onClick={stopTask}> <TbPlayerStopFilled/></button></li>
                <li ><button className='bg-blue-300 text-black p-5' onClick={estimate}> <FaClock /></button></li>
            </ul>
         </div>
       
    </aside>
  )
}

export default TaskSideBar