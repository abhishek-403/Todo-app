import React, { useEffect, useRef } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import RequireUser from './components/RequireUser';
import NotLoggedIn from './components/NotLoggedIn';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Navbar from './components/navbar/Navbar.js';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Loading from './components/Loading/Loading';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const TOAST_SUCCESS = 'toast_success';
export const TOAST_FAILURE = 'toast_failure'
export const TOAST_WARNING = 'toast_warning'



function App() {
  const isloading = useSelector(state => state.toastReducer.isLoading)
  const toastData = useSelector(state => state.toastReducer.toastData)
  const loadingRef = useRef(null);
  const isSpinning = useSelector(s => s.appConfigReducer.isSpinning)

  useEffect(() => {
    if (isloading) {
      loadingRef.current?.continuousStart();

    } else {
      loadingRef.current?.complete();
    }


  }, [isloading])


  useEffect(() => {

    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message);
        break;
      case TOAST_FAILURE:
        toast.error(toastData.message)
        break;
      case TOAST_WARNING:
        toast.warn(toastData.message)
        break;

      default:
    }


  }, [toastData])




 

  return (<>
    <div >

      <ToastContainer role='alert'
        style={{ fontSize: "14px" }}
        limit={1}
        position="top-center"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"

      />





    </div>
    {isSpinning && <Loading />}

    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<RequireUser />}>


      </Route>

      <Route element={<NotLoggedIn />} >
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Route>


      <Route path='*' element={<NotFound />} />
    </Routes>

  </>

  )
}

export default App;
