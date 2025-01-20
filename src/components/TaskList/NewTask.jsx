//components/TaskList/NewTask.jsx
import React from 'react'

const NewTask = ({data}) => {
    return (
        <>
        <div className='bg-red-400 h-full w-[320px] p-5 rounded-xl flex-shrink-0'>
        <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 p-1 text-sm rounded-md font-bold' >{data.category}</h3>
                    <h4 className='font-semibold'>{data.taskDate}</h4>
                </div>
                <h2 className='text-2xl mt-2 font-bold'>{data.taskTitle}</h2>
                <p className='mt-2 text-sm'>{data.taskDescription}</p>
            <div className='flex justify-between items-center'>
                <button className='bg-green-500 p-1 mt-4 rounded-md '>Accept Task</button>
                
            </div>
        </div>
    </>
    )
}

export default NewTask
