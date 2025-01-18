import React, { useEffect } from 'react'
import Login from '../src/components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { use } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
    useEffect(()=>{
      // setLocalStorage()
      getLocalStorage()
    },)

  return (
    <div>
     <Login/>
     {/* <EmployeeDashBoard/> */}
     {/* <AdminDashBoard/> */}
    </div>
  )
}

export default App
