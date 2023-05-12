import React,{useRef} from 'react'
import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/slices/TaskSlice';
import { Button } from '@mui/material'
import "./style.css"


function EachTask(props) {
  const compBtn= useRef(null)
  const task_box = useRef(null)
  const content_box= useRef(null)


  // const tasks = useSelector(s=>s.taskReducer.tasks)
  const dispatch = useDispatch()

  function handleDelete() {

    dispatch(removeTask(props.id))
  }
  const completed={
    backgroundColor: "DodgerBlue",


  }

  function handleComplete(){
    // compBtn.current.style.textDecoration= 'line-through'
    // compBtn.className= compBtn.className+'completed';
    // content_box.current.classList.toggle('completed')

    // compBtn.current.classList.toggle('completed')
    // compBtn.current.classList.toggle('completed')
    // console.log()
  
    if(compBtn.current.innerText==="Completed"){

      content_box.current.style.textDecoration="line-through";
      task_box.current.style.backgroundColor="#3b3c3c";
      compBtn.current.innerText="Pending";
      

    }
    else{
      content_box.current.style.textDecoration="none";
      task_box.current.style.backgroundColor="#444444";
      compBtn.current.innerText="Completed";
      
    }


  }



  return (
    <>

      <div ref={task_box} className='each-task-div'>
        <div ref={content_box} className='title-desc'    id="title-desc">
          <div className='hi' id="heading-div">{props.name}</div>
          <div id="desc-div">{props.desc}</div>

        </div>
        <div id="del-comp">
          <Button ref={compBtn} className='btn btn-success' onMouseUp={handleComplete} color="success" variant='outlined'>Completed</Button>

          <Button className='btn btn-delete' onClick={handleDelete} color="error" variant='outlined'>Delete</Button>
        </div>

      </div>

    </>
  )
}

export default EachTask;
