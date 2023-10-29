import React from "react"
import "./Head.css";

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='containers flexSB'>
          <div className='logo'>
            {/* <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span> */}
            <div className="LogoImgContainer">
               {/* <img className="imgLogo" src="../images/charitabletrust/Guru011.png"></img> */}
            </div>
          </div>

          <div className='social'>
            <div className="LogoImgContainers">
               {/* <img className="imgLogo" src="../images/charitabletrust/logo.png"></img> */}
            </div>
            {/* <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
