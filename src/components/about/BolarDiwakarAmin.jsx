import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import SliderComponent from "../home/hero/SliderComponent"
import  PIC1 from "../../assets/Images/BDNE/PIC1.jpg";

const BolarDiwakarAmin = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div className='right'>
            <Heading subtitle='Bolar Divakar Amin' title='' />
            <div className='itemss'>            
              
                  <div className='itemss flexSBs'>
                    <div className='img'>
                      <img src="https://img.icons8.com/ios/80/000000/diploma.png" alt='' />
                    </div>
                    <div className='text'>                      
                      <div>
                        <p style={{ marginTop:'30px'}}>
                            Bolar Divakar Amin born on 15th August 1947. He was working at Gulf for several years and now living at Pandeshwar after his retirement. He was the constant support of Shree Guru Charitable Trust for scholarship program. Being a rotarian president at Mangalore, he has served a lot towards the community at large. Unfortunately we lost him on 26th August 2020. His wife Mrs. Geetha Divakar Amin continuously sponsoring the Scholarship in Memory of Late Bolar Divakar Amin.
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

export default BolarDiwakarAmin;
