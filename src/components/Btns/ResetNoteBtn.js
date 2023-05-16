import React from 'react'

function ResetNoteBtn() {
    const style = {
    backgroundColor: `var(--danger-col)`,
    borderRadius: "30px",
    color:"white"


}
return (
    <div>


        <div style={style} className="btn btn-add">
            Reset <i className="uil2 uil-history-alt"></i>
        </div>
    </div>
)
}

export default ResetNoteBtn
