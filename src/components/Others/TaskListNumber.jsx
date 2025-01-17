import React from 'react'

const TaskListNumber = () => {
  return (
    <div className=' flex gap-4 justify-between px-4 mt-1'>
      <div className='bg-red-400 w-[45%] py-5 px-6 rounded-xl '>
        <h2 className='text-4xl font-medium'>0</h2>
        <h3 className='text-3xl font-bold'>New Task</h3>
      </div>
      <div className='bg-blue-400 w-[45%] py-5 px-6 rounded-xl '>
        <h2 className='text-4xl font-medium'>0</h2>
        <h3 className='text-3xl font-bold'>New Task</h3>
      </div><div className='bg-yellow-400 w-[45%] py-5 px-6 rounded-xl '>
        <h2 className='text-4xl font-medium'>0</h2>
        <h3 className='text-3xl font-bold'>New Task</h3>
      </div><div className='bg-orange-400 w-[45%] py-5 px-6 rounded-xl '>
        <h2 className='text-4xl font-medium'>0</h2>
        <h3 className='text-3xl font-bold'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumber
