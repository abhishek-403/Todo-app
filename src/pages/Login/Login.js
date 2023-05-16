import React from 'react'
import './login.scss'

function Login() {
  return (
    <div id='login'>

        <div className="content">
            <div className="top">
                Login

            </div>

            <form className="mid">
                <div id="email">
                    <label htmlFor="input-email"></label>
                <input type="text"  id='input-email'/>
                </div>
                <div id="password">
                    <label htmlFor="input-password">Password</label>
                <input type="text"  id='input-password'/>

                </div>

                
                <button type='submit'>Submit</button>


            </form>
            <div className="bottom">

            </div>
        </div>

      
    </div>
  )
}

export default Login
