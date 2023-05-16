import React from 'react'
import './signup.scss'

function Signup() {
    return (
        <div id='signup'>

            <div className="content">
                <div className="top">
                    Signup

                </div>

                <form className="mid">
                    <div id="name">
                        <label htmlFor="input-name"></label>
                        <input type="text" id='input-name' />
                    </div>
                    <div id="email">
                        <label htmlFor="input-email"></label>
                        <input type="text" id='input-email' />
                    </div>
                    <div id="password">
                        <label htmlFor="input-password">Password</label>
                        <input type="text" id='input-password' />

                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <div className="bottom">

                </div>
            </div>


        </div>
    )
}

export default Signup
