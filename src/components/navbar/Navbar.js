import React from 'react'
import './navbar.scss'
import Avartar from '../avatar/Avartar'
import { KEY_ACCESS_TOKEN, getItem, removeItem } from '../../utils/loacalStorageManager'
import { useSelector } from 'react-redux';
import LoginBtn from '../Btns/LoginBtn';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { axiosClient } from '../../utils/axiosClient';


function Navbar() {


    const user = getItem(KEY_ACCESS_TOKEN);
    const navigate = useNavigate();

    const profile = useSelector(s => s.appConfigReducer.myProfile)


    async function handlelogOut() {

        confirmAlert({
            title: 'Do you want to logout.',

            buttons: [
                {
                    label: 'Yes',
                    onClick: async () => {
                        await axiosClient.post('/auth/logout')

                        removeItem(KEY_ACCESS_TOKEN);
                        navigate('/login');
                    }
                },
                {
                    label: 'No',

                }
            ]
        });

    }



    return (

        <div className='navbar'>
            <div className="container">
                <div className="content flex">
                    <div className="left">
                        <h2 onClick={() => navigate('/')} className='head'>

                            YourNotes
                        </h2>


                    </div>
                    <div className="right center">
                        {
                            user ? <div className="avatar-img">
                                <Avartar name={profile.name} />
                            </div> :
                                <div onClick={() => navigate('/login')} className="login">
                                    <LoginBtn name="Login / Signup" color="var(--sec-col)" />
                                </div>

                        }



                        {
                            user &&
                            <i onClick={handlelogOut} className="uil uil-power"></i>
                        }


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar
