import React from 'react'

function CreateBtn() {
    const style = {
        position: "absolute",
        right: "10px",
        top: "2px",
        backgroundColor: "var(--prim-col)",
        borderRadius: "30px"

    }
    return (
        <div style={style} className="create-btn">


            <div className="btn btn-create">
                Create <s className="uil2 uil-plus"></s>
            </div>
        </div>
    )
}

export default CreateBtn
