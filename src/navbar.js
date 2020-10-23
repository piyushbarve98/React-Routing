import React from "react";

function Navbar(){
  return(
    <div className='navbar is-success'>
      <div className='navbar-brand'>
        <a className='title is-size-4 navbar-item'>ANIME</a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
        <a href='home' className='navbar-item'>Home</a>
        <a href='about' className='navbar-item'>About</a>
        <a href='contact' className='navbar-item'>Contact</a>
        <a className='navbar-item'>Help</a>

        </div>
      </div>
    </div>
  )
}

export default Navbar