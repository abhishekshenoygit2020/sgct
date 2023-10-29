import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import SliderComponent from "../home/hero/SliderComponent"
import  PIC1 from "../../assets/Images/BDNE/PIC1.jpg";

const KavoorSundaryPoojary = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div className='right'>
            <Heading subtitle='Shri. Kavoor Sunder Poojary' title='' />
            <div className='itemss'>
             
              
                  <div className='itemss flexSBs'>
                    <div className='img'>
                      <img src="https://img.icons8.com/ios/80/000000/diploma.png" alt='' />
                    </div>
                    <div className='text'>
                      
                      <div>
                        <p style={{ marginTop:'30px'}}>
                        Shri. Kavoor Sunder Poojary worked as Engineer at Gulf countries for more than 25 years and is now spending his retired life at Marcara Hill, Mangaluru.  He is one of the Donors for the Trust from the beginning.  He felt that his childhood difficulties should not be continued to the present generation and supports our trust activities. During his old age he lost his wife Shrimathi Vishala Sunder and wanted to sponsor Smt. Vishala Sunder Excellence award every year to one student of the Trust. Shri. Kavoor Sunder Poojary's Elder Daughter Dr. Sapan Sunder is a Well known Gynecologist and Mental health professional Doctor in England.  She wanted to sponsor Smt. Vishala Sunder Excellence award i.e on her mother's name to one student of the Trust.
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

export default KavoorSundaryPoojary;
