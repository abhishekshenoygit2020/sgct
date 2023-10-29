import { color } from "@mui/system"
import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import Marquee from "react-fast-marquee";


const Hero = () => {
  return (
    <>
      <section className='hero'>        
        <div className='containers'>
          <div id='whiteLabel'  style={{  backgroundColor: '#ffffff', opacity: '0.7',padding:'10px'}}>  
            {/* <Marquee style={{ color:'black'}}>
              <h1>I can be a React component, multiple React components, or just some text.</h1>
            </Marquee>           */}
            <Heading className= "Heading" subtitle='WELCOME TO SHREE GURU CHARITABLE TRUST (R.)' title='' />
            <div style={{}}>
              <h2 style={{ color: '#000000'}} className="headerPrimaryText desktopText"><b style={{ fontStyle:'bold'}}>"Educating Deserved children of our society"      <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; is  the aim and an ardent mission of our Trust.</b></h2>
              <h6 style={{ color: '#000000'}} className="headerPrimaryText  mobileText"><b style={{ fontStyle:'bold'}}>"Educating Deserved children of our society"  is  the aim and an ardent mission of our Trust.</b></h6>
            </div>
            
            <h6 style={{ color: '#000000',  textAlign:'right',  marginRight:'25px' }} className="headerText"><b style={{ fontFamily:'Mistral', fontStyle:'italic', textTransform:'capitalize'}}>"We Serve... The Deserved..."</b></h6>
            
            <div className='button'>
              {/* <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
              {/* <button className="ViewMore">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
        
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
