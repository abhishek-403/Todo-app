import React from 'react'

function AddNoteBtn() {
    const style = {
        backgroundColor: `var(--sec-col)`,
        borderRadius: "30px",
        color:"white"


    }
    return (
        <div>


            <div style={style} className="btn btn-add">
                Add <i className="uil2 uil-check-circle"></i>
            </div>
        </div>
    )
}

export default AddNoteBtn
