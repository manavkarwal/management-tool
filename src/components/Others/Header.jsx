//components/Other/Header.jsx
import React from 'react'



const Header = (props) => {

    const logout = () => {
        localStorage.setItem('loggedInUser', '');
        props.changeUser('')
    }

    
    return (
        <div className='flex items-end justify-between py-3 px-8 '>
            <div ><span className='text-3xl font-mono'>Hello! </span><br /> <span className='text-4xl font-semibold'>👋 </span></div>
            <div className='flex justify-between items-center '>
               
                <button onClick={logout} className='bg-red-600 rounded-sm p-2 font-bold '>Log Out</button>
            </div>
        </div>
    )
}

export default Header
