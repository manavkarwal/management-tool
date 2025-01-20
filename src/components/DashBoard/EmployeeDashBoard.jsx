
import Header from '../Others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../Others/TaskListNumber'





const EmployeeDashBoard = ({data}) => {




  return (
    <>

      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </>
  )
}

export default EmployeeDashBoard
