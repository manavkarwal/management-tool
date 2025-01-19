import React from 'react'

const Header = ({data}) => {
    
    return (
        <div className='flex items-end justify-between py-3 px-8 '>
            <div ><span className='text-3xl font-mono'>Hello! </span><br /> <span className='text-4xl font-semibold'>Manav 👋 </span></div>
            <button className='bg-red-600 rounded-sm p-2 font-bold '>Log Out</button>
        </div>
    )
}

export default Header
