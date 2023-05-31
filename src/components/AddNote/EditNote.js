import React, { useEffect, useRef } from 'react'
import ResetNoteBtn from '../Btns/ResetNoteBtn'
import AddNoteBtn from '../Btns/AddNoteBtn'
import { fetchProfile } from '../../redux/slices/appConfigSlice'
import { axiosClient } from '../../utils/axiosClient'
import { useDispatch } from 'react-redux'
import './addnote.scss'
import { toast } from 'react-toastify'
import { showToast } from '../../redux/slices/toastSlice'
import { TOAST_SUCCESS } from '../../App'

function EditNote(props) {
    const title = useRef(null)
    const description = useRef(null)
    const dispatch = useDispatch()

    async function load() {

        const info = await axiosClient.post('/note/getTask', {
            noteId: props.noteId

        })
        title.current.value = info.message.note.subject;
        description.current.value = info.message.note.description;
    }
    useEffect(() => {
        load();
    })



    async function handleEdit() {
        try {

            await toast.promise(
                axiosClient.post('/note/update', {
                    subject: title.current.value,
                    taskId: props.noteId,
                    description: description.current.value
                }),
                {
                  pending: 'Editing Note',
                  success: 'Note Edited 👌',
                  
                }
                )
            await 

            props.handleEditPage(false)


        } catch (e) {

        } finally {
            dispatch(fetchProfile())

        }


    }

    function resetForm() {
        title.current.value = "";
        description.current.value = "";
        dispatch(showToast({
            type: TOAST_SUCCESS,
            message: "Reset done"
          }))
    }

    return (
        <div className='addnote'>

            <form onSubmit={(e) => e.preventDefault()} className="content flexcol">
                <i onClick={() => props.handleEditPage(false)} id='cross' className="uil uil-times"></i>


                <div className="heading flexcol">
                    <label htmlFor="title">Title</label>
                    <input maxLength={14} ref={title} id='title' type="text" />


                </div>
                <div className="desc flexcol">
                    <label htmlFor="description">Description</label>
                    <textarea ref={description} name="" maxLength={550} rows="12" cols="" id="description" ></textarea>

                </div>
                <div className="buttons center">
                    <div onClick={handleEdit} className="add-btn">

                        <AddNoteBtn name="Edit" />
                    </div>
                    <div onClick={resetForm} className="reset-btn">
                        <ResetNoteBtn />

                    </div>

                </div>
            </form>

        </div>
    )
}

export default EditNote
