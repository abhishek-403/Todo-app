import React from 'react'

function Buttons(props) {
    const style = {
        backgroundColor: `${props.col}`,
        borderRadius: "30px",
        color:"white"


    }
    return (
        <div  className="">


            <div style={style} className="btn btn-add">
                {props.value} {props.icon}
            </div>
        </div>
    )
}

export default Buttons
