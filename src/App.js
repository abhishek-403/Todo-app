import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import RequireUser from './components/RequireUser';
import NotLoggedIn from './components/NotLoggedIn';
import Home from './pages/Home/Home';
import { KEY_ACCESS_TOKEN, setItem } from './loacalStorageManager';
import NotFound from './pages/NotFound/NotFound';
import AddNote from './components/AddNote/AddNote';
import Navbar from './components/navbar/Navbar.js';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import LoadingBar from 'react-top-loading-bar'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export const TOAST_SUCCESS = 'toast_success';
export const TOAST_FAILURE = 'toast_failure'



function App() {
  const isloading = useSelector(state => state.toastReducer.isLoading)
  const toastData = useSelector(state => state.toastReducer.toastData)
  const loadingRef = useRef(null);
  
  useEffect(() => {
    if (isloading) {
      loadingRef.current?.continuousStart();

    } else {
      loadingRef.current?.complete();
    }


  }, [isloading])

  const [t,setT]=useState(true)
  useEffect(() => {
    if(t){
      console.log("hi");
    switch (toastData.type) {
      case TOAST_SUCCESS:
        toast.success(toastData.message)
        
    setT(false);

        break;
      case TOAST_FAILURE:
        toast.error(toastData.message)
            setT(false);

        break;

      default: 
    }
  }

  }, [toastData])

  setItem(KEY_ACCESS_TOKEN, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDYzM2ZhZmVhYWIwYWJjNGYzZWZkOWUiLCJpYXQiOjE2ODQyMjU5NjksImV4cCI6MTY4NDMxMjM2OX0.Z46frM7p9ifNovuk77quk4wg1f6Ys6RPVYXjk3ZcR7E")

  return (<>
  <div>

      <Toaster />
  </div>

  
  <LoadingBar height={4} color="red" ref={loadingRef} />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route element={<RequireUser />}>
        <Route path='/note' element={<AddNote />} />



      </Route>

      <Route element={<NotLoggedIn />} >
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>

      </Route>


      <Route path='*' element={<NotFound />} />
    </Routes>

  </>

  )
}

export default App;
