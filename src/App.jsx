//App'jsx
import React, { useContext, useEffect, useState } from 'react'
import Login from '../src/components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  
  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    
      const loggedInUserR = localStorage.getItem('loggedInUserRole')
      
      if (loggedInUserR) {
        const userData = JSON.parse(loggedInUserR)
        setUser(userData.role)
      } 
    
  }, [])

  useEffect(() => {
    
    const loggedInUserD = localStorage.getItem('loggedInUserData')
    
    if (loggedInUserD) {
      const userData = JSON.parse(loggedInUserD)
      setloggedInUserData(userData.data)
    } 
  
}, [])

  const handleLogin = (email, password) => {

    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUserRole', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      console.log(employee)
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUserRole', JSON.stringify({ role: 'employee'}))
        localStorage.setItem('loggedInUserData', JSON.stringify({ data: employee }))  
      }
    } else {
      alert("Invalid Credentials")
    }

  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''} 
      {user == 'admin' ? <AdminDashBoard role={user}  changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashBoard  changeUser={setUser} data={loggedInUserData} /> : null)}
     

    </>
  )
}

export default App
