import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import RequireUser from './components/RequireUser';
import NotLoggedIn from './components/NotLoggedIn';
import Home from './pages/Home/Home';
import { KEY_ACCESS_TOKEN, setItem } from './loacalStorageManager';
import NotFound from './pages/NotFound/NotFound';
import AddNote from './components/AddNote/AddNote';
import Navbar from './components/navbar/Navbar.js';


function App() {
  setItem(KEY_ACCESS_TOKEN, "xyx")
  return (<>
  <Navbar/>
    <Routes>
      <Route element={<RequireUser />}>
        <Route path='/' element={<Home />} />
        <Route path='/note' element={<AddNote />} />



      </Route>

      <Route element={<NotLoggedIn />} >

      </Route>


      <Route path='*' element={<NotFound />} />
    </Routes>

  </>

  )
}

export default App;
