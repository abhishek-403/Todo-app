import React from 'react'

function LoginBtn(props) {
    const style = {
        backgroundColor: `${props.color}` || "var(--black-col)",
        borderRadius: "30px",
        fontSize: `${props.font}` || "17px",
        color: "white"


    }
    return (
        <div>


            <div style={style} className="btn btn-add">
                {props.name}
            </div>
        </div>
    )
}

export default LoginBtn
