import React from 'react'
import './navbar.scss'
import Avartar from '../avatar/Avartar'


function Navbar() {
  return (

    <div className='navbar'>
        <div className="container">
            <div className="content flex">
                <div className="left">
                    <h2 className='head'>

                     YourNotes
                    </h2>


                </div>
                <div className="right center">
                    <div className="avatar-img">
                    <Avartar/>

                    </div>
                    <div className="login">
                        <p>Login/Signup</p>
                    </div>
                    <div className="theme">
                    <i className="uil uil-moonset"></i>

                    </div>

                </div>
            </div>
        </div>

      
    </div>
  )
}

export default Navbar
