import React from 'react'

const TaskList = ({data}) => {
 
  return (
    <div id='tasklist' className=' scr mt-5 h-[310px] overflow-x-auto flex items-center  justify-start gap-5 flex-nowrap rounded-xl px-3 py-4 w-full'>
     <div className='bg-red-400 h-full w-[320px] p-5 rounded-xl flex-shrink-0'>
      <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 p-1 text-sm rounded-md font-bold' >High</h3>
        <h4 className='font-semibold'>20 feb 2024</h4>
      </div>
      <h2 className='text-2xl mt-2 font-bold'> Make a youtube video</h2>
      <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque eveniet ea ratione porro similique.</p>
     </div>
    

    </div>
  )
}

export default TaskList
