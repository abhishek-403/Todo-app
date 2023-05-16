import React, { useState } from 'react'
import './eachnote.scss'
import { fetchProfile } from '../../redux/slices/appConfigSlice';
import { useDispatch } from 'react-redux';
import { axiosClient } from '../../utils/axiosClient';
import EditNote from '../AddNote/EditNote';

function EachNote({ note }) {
    const dispatch = useDispatch();
    const [editingNote, setEditingNote] = useState(false)


    async function handleDelete() {
        try {
            await axiosClient.post('/note/delete', {
                taskId: note._id
            })


        } catch (e) {
            console.log(e);

        } finally {
            dispatch(fetchProfile())
        }


    }

    function handleEdit() {
        setEditingNote(true);

    }




    return (
        <div className='note'>
            {editingNote &&
                <EditNote noteId={note._id} handleEditPage={setEditingNote} />}
            <div className="content flexcol">

                <div className="top flex">
                    <h4 className="heading center">{note.subject}</h4>
                    <div className="icons  center">

                        <s onClick={handleEdit} className="uil2 uil-edit-alt"></s>
                    </div>
                </div>

                <div className="mid">
                    <div className="desc">
                        {note.description}
                    </div>

                </div>

                <div className="bottom flex">
                    <div className="time-stamp flexcol">
                        <p>Created on: 04:40, 14/05/2023</p>
                        <p>Last modified: 04:40, 14/05/2023</p>

                    </div>
                    <div className="icons">

                        <s onClick={handleDelete} className="uil2 uil-trash-alt"></s>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EachNote
