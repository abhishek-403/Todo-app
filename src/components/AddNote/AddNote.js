import React from 'react'
import './addnote.scss'
import Buttons from '../Btns/Buttons'

function AddNote() {
  return (
    <div className='addnote'>

      <form className="content">
        <i id='cross' className="uil uil-times"></i>


        <div className="heading flexcol">
          <label htmlFor="title">Title</label>
          <input id='title' type="text" />


        </div>
        <div className="desc flexcol">
          <label htmlFor="description">Description</label>
          <textarea name="" maxLength={600} rows="15" cols="" id="description" ></textarea>

        </div>
        <div className="buttons center">
          <Buttons value="Add" icon={<i class="uil2 uil-check-circle"></i>} col={`var(--sec-col)`} />
          <Buttons value="Reset" icon={<i class="uil2 uil-history-alt"></i>} col={`var(--danger-col)`} />


        </div>
      </form>

    </div>
  )
}

export default AddNote
