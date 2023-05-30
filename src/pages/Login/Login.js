import React, { useRef } from 'react'
import './Login.scss'
import LoginBtn from '../../components/Btns/LoginBtn'
import { Link, useNavigate } from 'react-router-dom'
import { axiosClient } from '../../utils/axiosClient';
import { KEY_ACCESS_TOKEN, setItem } from '../../loacalStorageManager';

function Login() {
    
    const email = useRef(null);
    const password = useRef(null);
    const navigate= useNavigate()
    
    async function submitLogin(){
        try {
            
            const response= await axiosClient.post('/auth/login',{
                email:email.current.value,
                password:password.current.value
            });
    
            setItem(KEY_ACCESS_TOKEN,response.message.accessToken);
            navigate('/home');
        } catch (e) {
            
            
        }


    }
    return (
        <div className='center' id='login'>

            <div className="content flexcol">
                <div className="top">
                    <h2>Login</h2>

                </div>

                <form className="mid flexcol">
                    <div id="email">

                        <input ref={email} autoComplete='off' placeholder='E-mail' type="text" id='input-email' />
                    </div>

                    <div id="password">
                        <label htmlFor="input-password"></label>
                        <input  ref={password} autoComplete='off' placeholder='Password' type="password" id='input-password' />





                    </div>

                    <div onClick={submitLogin} className="btn btn-login">
                        <LoginBtn color="var(--sec-col)" name='Login' />
                    </div>


                </form>
                <div className="bottom">
                    <span>Not a member? <Link to={'/signup'}>SignUp</Link>  </span>



                </div>
            </div>


        </div>
    )
}

export default Login
