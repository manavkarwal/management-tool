//components/TaskList/NewTask.jsx
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const NewTask = (props) => {

    const [userData, setUserData] = useContext(AuthContext);
    
    
    

   

    const onClick = (e) => {
        const data = userData
        data.forEach(function (elem) {
            if (props.employeedata == elem.firstname) {
                elem.taskNumbers.active = elem.taskNumbers.active + 1
                elem.taskNumbers.newTask = elem.taskNumbers.newTask - 1
            }
        })
    }


    return (
        <>
            <div className='bg-red-400 h-full w-[320px] p-5 rounded-xl flex-shrink-0'>
                <div className='flex items-center justify-between'>
                    <h3 className='bg-red-600 p-1 text-sm rounded-md font-bold' >{props.data.category}</h3>
                    <h4 className='font-semibold'>{props.data.taskDate}</h4>
                </div>
                <h2 className='text-2xl mt-2 font-bold'>{props.data.taskTitle}</h2>
                <p className='mt-2 text-sm'>{props.data.taskDescription}</p>
                <div className='flex justify-between items-center'>
                    <button onClick={onClick} className='bg-green-500 p-1 mt-4 rounded-md '>Accept Task</button>

                </div>
            </div>
        </>
    )
}

export default NewTask
