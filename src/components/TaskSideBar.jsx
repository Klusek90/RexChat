import React from 'react'
import { FaPlay,FaClock, FaUpload   } from "react-icons/fa";
import { TbPlayerPauseFilled, TbPlayerStopFilled  } from "react-icons/tb";
import { FaCodeBranch } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";

const TaskSideBar = () => {
//   const [isDisabled, setIsDisabled] = useState(true);

  return (
    <aside className='h-lvh items-center bg-gray-700 shadow-sm absolute top-0 right-0'>
        <div>
            <ul className='mt-40'>
                <li><p>Assigned to:</p></li>
                <li className='font-bold'><p>Development</p></li>
                <li ><button className='bg-blue-100 text-black p-5 mb-5'><BsFillSendFill /></button></li>
                <li ><p >Task</p></li>
                <li className='font-bold mb-1'><p>235645</p></li>
                <li ><button className='bg-purple-200 text-black p-5 mb-5'><FaCodeBranch /></button></li>
                <li ><button className='bg-gray-200 text-black p-5'><FaUpload /></button></li>
                <li className='my-10'></li>
                <li ><button className='bg-green-200 text-black p-5 text-center mb-1'><FaPlay /></button></li>
                <li ><button className='bg-yellow-100 text-black p-5 mb-1'><TbPlayerPauseFilled /></button></li>
                <li ><button className='bg-red-600 py-5 mb-1'><TbPlayerStopFilled /></button></li>
                <li ><button className='bg-blue-300 text-black p-5'><FaClock /></button></li>
            </ul>
         </div>
       
    </aside>
  )
}

export default TaskSideBar