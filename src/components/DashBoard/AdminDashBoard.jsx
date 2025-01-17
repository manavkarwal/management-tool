import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import Alltasks from '../Others/Alltasks'

const AdminDashBoard = () => {
    return (
        <>
            <Header />
            <CreateTask />
            <Alltasks/>
        </>
    )
}

export default AdminDashBoard
