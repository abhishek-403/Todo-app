import React, { useRef } from 'react'
import './signup.scss'
import LoginBtn from '../../components/Btns/LoginBtn'
import { Link, useNavigate } from 'react-router-dom'
import { axiosClient } from "../../utils/axiosClient";
import { KEY_ACCESS_TOKEN, setItem } from '../../loacalStorageManager';


function Signup() {
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    async function submitForm(){
        const response=await axiosClient.post('/auth/signup',{
            name:name.current.value,
            email:email.current.value,
            password:password.current.value
        })
        

        setItem(KEY_ACCESS_TOKEN,response.message.accessToken);
        navigate('/home');

        


        
    }


    return (
        <div className='center' id='signup'>

            <div className="content flexcol">
                <div className="top">
                    <h2>Sign up</h2>

                </div>

                <form className="mid flexcol">
                    <div id="name">
                        <input maxLength={14} ref={name} autoComplete='off' placeholder='Name' type="text"
                            autoCapitalize='on' id='' />

                    </div>

                    <div id="email">
                        <input ref={email}  autoComplete='off' placeholder='E-mail' type="text" id='input-email' />
                    </div>

                    <div id="password">
                     
                        <input ref={password}  autoComplete='off' placeholder='Password' type="password" id='input-password' />

                    </div>

                    <div onClick={submitForm} className="btn btn-login">
                        <LoginBtn color="var(--prim-col)" name='Sign up' />
                    </div>


                </form>
                <div className="bottom">
                    <span>Already a member? <Link to={'/login'}>Login</Link>  </span>



                </div>
            </div>


        </div>
    )
}

export default Signup
