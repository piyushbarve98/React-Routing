import React from "react";
import {Link, NavLink } from 'react-router-dom';
function Navbar(){
  return(
    <div className='navbar is-success'>
      <div className='navbar-brand'>
        <a href='home' className='title is-size-3 navbar-item'>ANIME</a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
        <Link to='home' className='navbar-item'>Home</Link>
        <Link to='about' className='navbar-item'>About</Link>
        <Link to='contact' className='navbar-item'>Contact</Link>
        <Link to='home' className='navbar-item'>Help</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar