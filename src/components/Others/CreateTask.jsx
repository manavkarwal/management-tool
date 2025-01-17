import React from 'react'

const CreateTask = () => {
  return (
    <div>
    <form className='flex justify-between  items-start   px-14'>
        <div>
            <div className='mt-3'>
                <h3 className='font-mono'> Task Title</h3>
                <input className='w-[500px] p-1 px-3 outline-none placeholder:text-sm rounded-md bg-transparent border-2 border-white' type="text" placeholder='Make a UI design' />
            </div>
            <div className='mt-3'>
                <h3 className='font-mono'>Date</h3>
                <input className='w-[500px] px-3 bg-gray-600 border-2 placeholder:text-sm border-white p-1 outline-none rounded-md' type="date" />
            </div>
            <div className='mt-3'>
                <h3 className='font-mono'>Asign to</h3>
                <input className='w-[500px] px-3 bg-transparent border-2 placeholder:text-sm border-white p-1 outline-none rounded-md' type="text" placeholder='employee name' />
            </div>
            <div className='mt-3'>
                <h3 className='font-mono'>Category</h3>
                <input className='w-[500px] px-3 bg-transparent border-2 placeholder:text-sm border-white p-1 outline-none rounded-md'  type="text" placeholder='design, dev etc' />
            </div>
        </div>
        <div>
            <div>
                <h3 className='font-mono'>Description</h3>
                <textarea className='text-balance bg-transparent border-2 border-white   p-1 outline-none rounded-md w-[500px] p-2' name='' id='' cols={50} rows={9}></textarea>
            </div>
            <button className='bg-white mt-1 font-semibold text-black p-1 w-[500px] rounded-md'>Create Task</button>
        </div>
    </form>
</div>
  )
}

export default CreateTask
