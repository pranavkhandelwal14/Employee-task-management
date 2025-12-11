import React from 'react'
import Header from '../other/Header'
import TastListNumbers from '../other/TastListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen '>
        <Header changeUser={props.changeUser} data={props.data} />
        <TastListNumbers data={props.data} />
        <TaskList data={props.data}
        />
      </div>
    </div>
  )
}

export default EmployeeDashboard
