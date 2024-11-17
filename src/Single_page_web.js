import React from 'react'
import Navbar from './Navbar'
import './App.css'
import {Route,Routes}  from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


const Single_page_web = () => {
  return (
    <>
    
      <Navbar/>

      <Routes>

        <Route   path='/Home' element={<Home/>}  />
        <Route   path='/about' element={<About/>}  />
        <Route   path='/contact' element={<Contact/>}  />


      </Routes>

    </>
  )
}

export default Single_page_web;