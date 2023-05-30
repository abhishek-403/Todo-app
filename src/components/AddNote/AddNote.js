import React, {  useRef} from 'react'
import './addnote.scss'
import { useDispatch } from 'react-redux'
import AddNoteBtn from '../Btns/AddNoteBtn';
import ResetNoteBtn from '../Btns/ResetNoteBtn';
import { axiosClient } from '../../utils/axiosClient';
import { fetchProfile } from '../../redux/slices/appConfigSlice';
import { showToast } from '../../redux/slices/toastSlice';
import { TOAST_FAILURE, TOAST_SUCCESS } from '../../App';
import { toast } from 'react-toastify';

function AddNote(props) {
  const dispatch = useDispatch();
  const desc = useRef()
  const title = useRef()

  async function handleAdd() {
    try {
      if(title.current.value === "" || 
      desc.current.value === ""){
        dispatch(showToast({
          type: TOAST_FAILURE,
          message: "All fields reqired"
        }))

        return;

      }
      await toast.promise(
        axiosClient.post('/note/create', {
          subject: title.current.value,
          description: desc.current.value

        }),
        {
          pending: 'Creating Note',
          success: 'Note added 👌',
         }
      )

      title.current.value = "";
      desc.current.value = "";
      props.handlePage(false);


      dispatch(fetchProfile());


    } catch (e) {
      return Promise.reject(e);

    }


  }

  function resetForm() {
    title.current.value = "";
    desc.current.value = "";
    dispatch(showToast({
      type: TOAST_SUCCESS,
      message: "Reset done"
    }))
  }
  return (
    <div className='addnote'>

      <form onSubmit={(e) => e.preventDefault()} className="content flexcol">
        <i onClick={() => props.handlePage(false)} id='cross' className="uil uil-times"></i>


        <div className="heading flexcol">
          <label htmlFor="title">Title</label>
          <input autoFocus maxLength={14} ref={title} id='title' type="text" />


        </div>
        <div className="desc flexcol">
          <label htmlFor="description">Description</label>
          <textarea ref={desc} name="" maxLength={550} rows="12" cols="" id="description" ></textarea>

        </div>
        <div className="buttons center">
          <div onClick={handleAdd} className="add-btn">

            <AddNoteBtn name="Add" />
          </div>
          <div onClick={resetForm} className="reset-btn">
            <ResetNoteBtn />

          </div>

        </div>
      </form>

    </div>
  )
}

export default AddNote
