
import React from 'react'   // food web

import './Card.css'; 
import Cart from './Cart'
import { Route,Routes } from 'react-router-dom'
import ViewCart from './ViewCart'
const Pizz_Addtocart = () => {

  return (
    <div>
      {/* <Comp /> */}
      <Cart/>
  
    
      <Routes>

     

        <Route   path='/'  element={<Cart/>}  />
        <Route  path='/view'  element={<ViewCart/>}/>
      </Routes>
    </div>
  )
}

export default Pizz_Addtocart ;