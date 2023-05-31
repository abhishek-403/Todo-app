import React, { useState } from 'react'
import './eachnote.scss'
import { fetchProfile } from '../../redux/slices/appConfigSlice';
import { useDispatch } from 'react-redux';
import { axiosClient } from '../../utils/axiosClient';
import EditNote from '../AddNote/EditNote';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';

function EachNote({ note }) {
    const dispatch = useDispatch();
    const [editingNote, setEditingNote] = useState(false);

    async function handleDelete() {
        try {

            confirmAlert({
                title: 'Do you want to Delete.',

                buttons: [
                    {
                        label: 'Yes',
                        onClick: async () => {
                            await toast.promise(
                                axiosClient.post('/note/delete', {
                                    taskId: note._id
                                }),
                                {
                                    pending: 'Deleting Note',
                                    success: 'Note Deleted',

                                }
                            )
                            dispatch(fetchProfile())
                        }
                    },
                    {
                        label: 'No',

                    }
                ]
            });


        } catch (e) {

        }

    }

    function handleEdit() {
        setEditingNote(true);

    }





    return (
        <div className='note'>
            {editingNote &&
                <EditNote noteId={note._id} handleEditPage={setEditingNote} />}
            <div style={{ backgroundColor: `hsl(${note.hslCol}, 100%, 93%)` }} className="content flexcol">

                <div style={{ backgroundColor: `hsl(${note.hslCol}, 77%, 57%)` }} className="top flex">
                    <h4 className="heading center">{note.subject}</h4>
                    <div className="icons  center">

                        <s onClick={handleEdit} className="uil2 uil-edit-alt"></s>
                    </div>
                </div>

                <div className="mid">
                    <div className="desc">
                        <span className=''>

                            {note.description}
                        </span>
                    </div>

                </div>

                <div className="bottom flex">
                    <div className="time-stamp flexcol">
                        <p>Created on : {note.createdAt?.slice(0, 10)}</p>
                        <p>Last modified : {note.updatedAt?.slice(0, 10)}</p>

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
