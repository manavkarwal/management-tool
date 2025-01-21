//components/TaskList/TaskList.jsx
import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {


  return (
    <div id='tasklist' className=' scr mt-5 h-[310px] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap rounded-xl px-3 py-4 w-full'>

      {data.tasks.map((elem , idx) => {
        if (elem.active) {
          return <AcceptTask employeedata={data}  key={idx} data={elem} />
        }
        if (elem.newTask) {
          return <NewTask  key={idx} employeedata={data} data={elem}/>
        }
        if (elem.completed) {
          return <CompleteTask employeedata={data}   key={idx} data={elem}/>
        }
        if (elem.failed) {
          return <FailedTask employeedata={data}   key={idx} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList
