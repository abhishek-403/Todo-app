import { Button } from '@mui/material'
import { nanoid } from '@reduxjs/toolkit'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/slices/TaskSlice'


function AppBar() {

    const nameRef = useRef(null)
    const descRef = useRef(null)

    const dispatch = useDispatch()


    // console.log(desc);


    function handleSubmit() {
        if (nameRef.current.value === "" ||
            descRef.current.value === "") { return; }


        dispatch(addTask({
            name: nameRef.current.value,
            desc: descRef.current.value,
            id: nanoid(4)

        }))

        nameRef.current.value = "";
        descRef.current.value = "";
    }


    return (
        <div id="app-bar">

            <div onKeyDown={(e) => { if (e.key === "Enter") { handleSubmit() } }} id="input-cols">

                <div className="each-input-col">
                    <label htmlFor="task-input">Name :</label>

                    <input maxLength="20" autoComplete='off' ref={nameRef} required type="text" id="task-input" />
                    
                </div>
                <div className="each-input-col">

                    <label htmlFor="desc-input">Description :</label>

                    <input maxLength="80" autoComplete='off' ref={descRef} required type="text" id="desc-input" />
                </div>


                

            </div>

            <Button className='btn btn-addTask' onClick={handleSubmit} color="secondary" variant='contained'>Add Task</Button>








        </div>
    )
}

export default AppBar
