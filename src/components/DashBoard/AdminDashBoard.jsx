//components/DashBoard/AdminDashBoard.jsx
import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import Alltasks from '../Others/Alltasks'

const AdminDashBoard = (props) => {
    return (
        <>
            <Header  changeUser={props.changeUser}  />
            <CreateTask />
            <Alltasks/>
        </>
    )
}

export default AdminDashBoard
