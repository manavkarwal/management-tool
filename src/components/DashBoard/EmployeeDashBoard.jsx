import React from 'react'
import Header from '../Others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../Others/TaskListNumber'



const EmployeeDashBoard = () => {
  return (
    <>
    <Header/>
    <TaskListNumber/>
    <TaskList/>
    </>
  )
}

export default EmployeeDashBoard
