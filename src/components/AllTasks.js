import React from 'react'
import { useSelector } from 'react-redux'
import EachTask from './EachTask'

function AllTasks() {

  const tasks = useSelector(state=>state.taskReducer.tasks)


    


  return (
    <>
    <div id="all-tasks-div">
      {
        tasks.map((item,key) =>{
          return(
           <EachTask id={item.id} key={key} name={item.name} desc={item.desc} />
          )
        })
      }
    </div>
      
    </>
  )
}

export default AllTasks
