import React, { useContext, useEffect, useState } from 'react'
import Login from '../src/components/Auth/Login'
import EmployeeDashBoard from './components/DashBoard/EmployeeDashBoard'
import AdminDashBoard from './components/DashBoard/AdminDashBoard'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

const App = () => {
  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  },)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext);


 

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  }, [authData])

  useEffect(() => {
    const loggedInEmployee = JSON.parse(localStorage.getItem("loggedInEmployee"));
    if (loggedInEmployee) {
      setloggedInUserData(loggedInEmployee);
    }
    // This useEffect runs only once during the initial load or refresh
  }, []);
  


  const handleLogin = (email, password) => {

    if (email == 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = (authData && authData.employees.find((e) => email == e.email && e.password == password))
      console.log(employee)
      if (employee) {
        setUser('employee')
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
        localStorage.setItem('loggedInEmployee', JSON.stringify(employee))
        // setloggedInUserData(employee)
      }
    } else {
      alert("Invalid Credentials")
    }

  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {(user == 'admin' ? <AdminDashBoard /> : (user == 'employee' ? <EmployeeDashBoard data={loggedInUserData} /> : null))}

    </>
  )
}

export default App
