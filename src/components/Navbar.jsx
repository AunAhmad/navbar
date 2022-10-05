import React, { useCallback, useState } from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCancelCircle} from 'react-icons/im'

const Navbar = () => {
    const[overlay, setOverlay] = useState(false);
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-logo">
            <h1>Logo</h1>
        </div>
        <ul className="app__navbar-navlist">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">shop</a></li>
            <li><a href="#">Contact Us</a></li>
            

        </ul>
        <div className="app__navbar-button">
            <button>Sign Up</button>
        </div>
        <div className="app__navbar-smallscreen">
            <span className='open' onClick={()=>{setOverlay(true)}}><GiHamburgerMenu/></span>
            {overlay && <div className="overlay">
            <span className='minus' onClick={()=>{setOverlay(false)}}><ImCancelCircle/></span>
        <ul className="app__navbar-navlist-smallscreen">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">shop</a></li>
            <li><a href="#">Contact Us</a></li>
            

        </ul>

            </div> }
            
        </div>
      
    </nav>
  )
}

export default Navbar

