import React, { useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";

const AssigneDropBox = () => {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);

    };
  return (
    <>
    <div 
    // className="flex flex-col items-center justify-center"
    >
      <p className='mr-5' >Assigned to:</p>
      {/* <div className="flex items-center"> */}
       
        <select
          value={selectedValue}
          onChange={handleChange}
          // className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Option 1">Development</option>
          <option value="Option 2">Programming</option>
          <option value="Option 3">Other Options</option>
        </select>
            <button 
            // className="bg-blue-100 text-black p-2 ml-2 rounded"
            >
            <BsFillSendFill />
            </button>
      </div>
    {/* </div> */}
    </>
  )
}

export default AssigneDropBox