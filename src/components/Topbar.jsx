import React from 'react'

const Topbar = () => {
  return (
    <div className='absolute top-0 left-0 w-11/12 flex flex-col'>
        <div className='inherit left-0 py-2'>
          <table>
            <tr>
              <td className='w-10 '></td>
              <td className='mx-20 w-2/12'><a href="http://www.google.com" >Taskasaurus Rex</a></td>
              <td><button href="http://www.google.com">Dashboard</button></td>
              <td><button href="http://www.google.com">Tasks</button></td>
              <td><button href="http://www.google.com">Queues</button></td>
              <td><button href="http://www.google.com">View</button></td>
              <td><button href="http://www.google.com">Users</button></td>
              <td><button href="http://www.google.com">Tags</button></td>
              <td className='w-2/12'></td>
              <td><button  href="http://www.google.com">User</button></td>
              <td><button className='bg-blue-400'>Sign out</button></td>
            </tr>
          </table>
        </div>
    </div>
  )
}

export default Topbar