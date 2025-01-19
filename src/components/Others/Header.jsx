import React from 'react'



const Header = ({ data }) => {

    const logout = () => {
        localStorage.removeItem('loggedInUser');
        window.location.reload()
    }

    const refresh = () => {
        window.location.reload()
    }
    return (
        <div className='flex items-end justify-between py-3 px-8 '>
            <div ><span className='text-3xl font-mono'>Hello! </span><br /> <span className='text-4xl font-semibold'>{data.firstname}👋 </span></div>
            <div className='flex justify-between items-center '>
                <button  onClick={refresh} className='bg-red-600 rounded-sm p-2 font-bold  mx-2'>Refresh</button>
                <button onClick={logout} className='bg-red-600 rounded-sm p-2 font-bold '>Log Out</button>
            </div>
        </div>
    )
}

export default Header
