import React, { useContext } from 'react'
import { AuthContext } from '/projects/EMS/management tool/src/context/AuthProvider'

const Alltasks = () => {

  const authData = useContext(AuthContext);
  return (
    <div className='p-5 rounded mt-5' >
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
        <h2 className='text-lg font-medium w-1/5'>New Task</h2>
        <h2 className='text-lg font-medium w-1/5'>Active Task</h2>
        <h2 className='text-lg font-medium w-1/5'>Completed</h2>
        <h2 className='text-lg font-medium w-1/5'>Failed</h2>
      </div>
      <div>
        {authData.employees.map(function (elem) {
          return <div className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskNumbers.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h3>
            <h3 className='text-lg font-medium w-1/5 text-white-400'>{elem.taskNumbers.completed}</h3>
            <h3 className='text-lg font-medium w-1/5 text-red-400'>{elem.taskNumbers.failed}</h3>
          </div>
        })}
      </div>
    </div>

  )
}

export default Alltasks
