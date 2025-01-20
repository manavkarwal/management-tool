// components/Auth/Login.jsx
import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        console.log('email is', email)
        console.log('password is', password)

        setEmail("")
        setPassword("")

    }

    return (
        <>
            <div className='flex items-center justify-center h-screen w-screen  '>
                <div>
                    <form
                        onSubmit={(e) => submitHandler(e)}
                        className='flex items-center justity-center flex-col gap-4 rounded-md border-white border-2 p-16'>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className='bg-transparent placeholder:text-gray-400 placeholder:font-extralight   rounded-full outline-none border-white border-2 px-3 py-1' type="email" placeholder='Enter Email' />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className='bg-transparent placeholder:text-gray-400 placeholder:font-extralight   rounded-full outline-none border-white border-2 px-3 py-1' type="password" placeholder='Enter Password' />
                        <button className='bg-white px-[75px] py-1 text-black font-bold rounded-md mt-2'>submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
