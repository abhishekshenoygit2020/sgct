import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import SliderComponent from "../home/hero/SliderComponent"
import  PIC1 from "../../assets/Images/BDNE/PIC1.jpg";

const NageshKoraggapaa = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div className='right'>
            <Heading subtitle='' title='' />
            <div className='itemss'>
                  <div className='itemss flexSBs'>
                    <div className='img'>
                      <img src="https://img.icons8.com/ios/80/000000/diploma.png" alt='' />
                    </div>
                    <div className='text'>
                      
                      <div>
                        <p style={{ marginTop:'30px'}}>Nagesh Koragappa, B.Tech (NITK Surathkal), M.S. (University of Oklahoma), M.S. (Cornell University)</p><br></br>

                        <p>Profession: Engineer</p><br></br>

                        <p>Father: Late Mr. K.H. Koragappa, Profession: Farmer</p><br></br>

                        <p>Profession: Software</p><br></br>

                        <p> Father: Mr. J. Somashekar Amin, Profession: Engineer</p><br></br>

                        <p> Mother: Late Mrs. Kasthuri Somashekar, Profession: Housewife
                        </p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        
  
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default NageshKoraggapaa;
