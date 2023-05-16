import React, { useEffect, useRef, useState } from 'react'
import './addnote.scss'
import { useDispatch } from 'react-redux'
import AddNoteBtn from '../Btns/AddNoteBtn';
import ResetNoteBtn from '../Btns/ResetNoteBtn';
import { axiosClient } from '../../utils/axiosClient';
import { fetchProfile } from '../../redux/slices/appConfigSlice';
import { showToast } from '../../redux/slices/toastSlice';
import { TOAST_SUCCESS } from '../../App';

function AddNote(props) {
  const dispatch = useDispatch();
  const desc= useRef()
  const title = useRef()

  async function handleAdd() {
    try {
      await axiosClient.post('/note/create', {
        subject: title.current.value,
        description: desc.current.value
        
      });
      resetForm();

      dispatch(showToast({
        type:TOAST_SUCCESS,
        message:"Note added"
      }))

    } catch (e) {
      console.log(e);

    } finally {
      dispatch(fetchProfile())   
    }


  }

  function resetForm (){
    title.current.value= "";
    desc.current.value= "";  
  }
  return (
    <div className='addnote'>

      <form onSubmit={(e) => e.preventDefault()} className="content">
        <i onClick={() => props.handlePage(false)} id='cross' className="uil uil-times"></i>


        <div className="heading flexcol">
          <label htmlFor="title">Title</label>
          <input ref={title} id='title' type="text" />


        </div>
        <div className="desc flexcol">
          <label htmlFor="description">Description</label>
          <textarea ref={desc} name="" maxLength={600} rows="15" cols="" id="description" ></textarea>

        </div>
        <div className="buttons center">
          <div onClick={handleAdd} className="add-btn">

            <AddNoteBtn />
          </div>
          <div onClick={resetForm} className="reset-btn">
            <ResetNoteBtn  />

          </div>

        </div>
      </form>

    </div>
  )
}

export default AddNote
