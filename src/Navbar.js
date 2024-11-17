import React from 'react'

import {NavLink}  from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div id='div'>  
        <NavLink   to='/Home'>   <p>Home</p> </NavLink>
       
       <NavLink  to='/about'>     <p> About</p>  </NavLink>

       <NavLink  to='/Contact'>     <p> Contact</p>  </NavLink>
     
        
        </div>
      

    </>
  )
}

export default Navbar