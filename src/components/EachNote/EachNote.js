import React from 'react'
import './eachnote.scss'

function EachNote({ note }) {
    return (
        <div className='note'>
            <div className="content flexcol">
                <div className="top flex">
                    <h4 className="heading center">{note.title}</h4>
                    <div className="icons  center">

                        <s className="uil2 uil-edit-alt"></s>
                    </div>
                </div>

                <div className="mid">
                    <div className="desc">
                        {note.desc}
                    </div>

                </div>

                <div className="bottom flex">
                    <div className="time-stamp flexcol">
                        <p>Created on: 04:40, 14/05/2023</p>
                        <p>Last modified: 04:40, 14/05/2023</p>

                    </div>
                    <div className="icons">

                        <s className="uil2 uil-trash-alt"></s>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default EachNote
