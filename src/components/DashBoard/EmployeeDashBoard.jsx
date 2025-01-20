//components/DashBoard/EmployeeDashBoard.jsx
import Header from '../Others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../Others/TaskListNumber'




const EmployeeDashBoard = (props) => {




  return (
    <>

      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data}/>
    </>
  )
}

export default EmployeeDashBoard
