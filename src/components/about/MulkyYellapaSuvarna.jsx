import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import SliderComponent from "../home/hero/SliderComponent"
import  PIC1 from "../../assets/Images/BDNE/PIC1.jpg";
import BSKlogo from "../../assets/Images/BDNE/BSKlogo.jpg";
import pic2 from "../../assets/Images/BDNE/pic2.jpg";
import pic3 from "../../assets/Images/BDNE/pic3.jpg";
import pic4 from "../../assets/Images/BDNE/pic4.jpg";
import pic5 from "../../assets/Images/BDNE/pic5.jpg";
import pic6 from "../../assets/Images/BDNE/pic6.jpg";
import pic7 from "../../assets/Images/BDNE/pic7.JPG";
import pic8 from "../../assets/Images/BDNE/pic8.JPG";
import pic9 from "../../assets/Images/BDNE/pic9.JPG";
import pic10 from "../../assets/Images/BDNE/pic10.JPG";
import pic11 from "../../assets/Images/BDNE/pic11.JPG";
import pic12 from "../../assets/Images/BDNE/pic12.JPG";
import pic13 from "../../assets/Images/BDNE/pic13.jpg";
import pic14 from "../../assets/Images/BDNE/pic14.jpg";
import pic15 from "../../assets/Images/BDNE/pic15.jpg";
import pic16 from "../../assets/Images/BDNE/pic16.jpg";

const Billavas = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div>                       
            <section className='blog'>
              <div className='container'>                            
                <div className='grid2'>                             
                    <div className='items shadow'>
                      <div className='img'>
                        <img src={pic14} alt='' />
                      </div>               
                    </div>      
                    <div className='items shadow'>
                      <div className='img'>
                        <img src={pic15} alt='' />
                      </div>               
                    </div>  
                    <div className='items shadow'>
                      <div className='img'>
                        <img src={pic16} alt='' />
                      </div>               
                    </div>  
                                                                        
                </div>
              </div>
            </section>
          </div>

          <div className='right'>
            <Heading subtitle='Mulky Yellappa Suvarna-Smt. Leelavathi Yellapa Suvarna Foundation, Mangaluru' title='' />
            <div className='itemss'>
                  <div className='itemss flexSBs'>
                    <div className='img'>
                      <img src="https://img.icons8.com/ios/80/000000/diploma.png" alt='' />
                    </div>
                    <div className='text'>
                      
                      <div>
                        <p style={{ marginTop:'30px'}}>
                        Late Shri Mulki Yellappa Suvarna and late Smt.Leelavathi Suvarna are blessed with 5 children, 4 males and one female. Chandrahas Suvarna, Shylendra Suvarna, Jeethendra Suvarna, Smt. Veena Ramdas Sanil and Ramdas Suvarna. The Parents were education lovers, so they tried to give education to their children as well as other children of family and outside. Late Mr. Yellappa Suvarna was a honorary teacher, for 7 yrs. in FREE NIGHT HIGH SCHOOL MUMBAI. Smt. Leelavathi Suvarna also did her teacher training in Government School in Jyothi, Mangalooru. But Mr. Yellappa Suvarna died at a small age, due to heart attack, at 47. So Mrs. Leelavathi Suvarna fed the children with great difficulties.because of her efforts,Today Mr. Shylendra Suvarna became an established business man in Mangalore, owning SRR MASALA Industries, a private limited company.He is also a social worker and education lover, started to help students, once he became financially independent. Mr. Jeethendra Suvarna a established business man in Dubai, Managing Director of BLUESTREAMS Middle East, also a education lover and doner, Mr. Rohith Sanil, S/o Mrs. Veena Ramdas Sanil, a well established business man in Kuwait, a education lover and donor, Managing Director of NEO CLASSICS, in Kuwait,so the above said 3 are joined and started SHREE MULKI YELLAPPA SUVARNA AND SMT. LEELAVATHI YELLAPPA SUVARNA FOUNDATION to support to the education of deserving financially backward students, and joined hands with SHREE GURU CHARITABLE TRUST, and started giving a fund of Rs five lakhs every year, since 5years. Before this also they were funding individually to the above said Trust. Thanks to the founders, for their social concern and Charity in real meaning, to strengthen the poor students by education, as the followers of SHREE👍NARAYANA GURU
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

export default Billavas;
