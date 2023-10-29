import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <div className="LogoImgContainer">
               <img className="imgLogo" src="../images/charitabletrust/Guru011.png"></img>
              </div>
            </li>
            <li>
              <Link to='/'>HOME</Link>
            </li>
            <li>
              <Link to='/courses'>OUR ASSOCIATES</Link>
            </li>
            <li>
              <Link to='/about'>ABOUT</Link>
            </li>
            <li>
              <Link to='/team'>TEAM</Link>
            </li>
            <li>
              <Link to='/journal'>NEWS & EVENTS</Link>              
            </li>    
          { /* <li>
                     <Link to='/pricing'>Pricing</Link>
              </li> */}
            <li>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
          <div className='start'>
            <div className="LogoImgContainers">
               <img className="imgLogo" src="../images/charitabletrust/logo.png"></img>
            </div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
