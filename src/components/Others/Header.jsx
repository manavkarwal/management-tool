//components/Other/Header.jsx
import React from 'react'



const Header = (props) => {

    console.log(props.role)
    

    const logout = () => {
        localStorage.removeItem('loggedInUserRole');
        props.changeUser('')
    }

    
    return (
        <div className='flex items-end justify-between py-3 px-8 '>


            <div ><span className='text-3xl font-mono'>Hello! </span><br />
            


            {props.role == 'admin' ? <span className='text-4xl font-semibold'>Admin👋 </span> : <span className='text-4xl font-semibold'>{props.data.firstname}👋 </span> }
             

             </div>

            <div className='flex justify-between items-center '>
               
                <button onClick={logout} className='bg-red-600 rounded-sm p-2 font-bold '>Log Out</button>
            </div>
        </div>
    )
}

export default Header
