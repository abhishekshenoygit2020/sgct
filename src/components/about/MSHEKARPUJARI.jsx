import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import SliderComponent from "../home/hero/SliderComponent"
import PIC1 from "../../assets/Images/BDNE/PIC1.jpg";
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

import "../blog/blog.css"

const MSHEKARPUJARI = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div className='right'>
            <Heading subtitle='M. SHEKHAR PUJARI &amp; B.Sc;MA;LLB;PGDBM;PGDIRPM;PGDIEM' title='' />
            <div className='itemss'>
             
              
                  <div className='itemss flexSBs'>
                    <div className='img'>
                      {/* <img src={BSKlogo} alt='' /> */}
                    </div>
                    <div className='text'>
                      {/* <h2>{val.title}</h2> */}
                      <div>
                        <p style={{ marginTop:'30px'}}><b>Profession:</b> General Manager – Aspinwall and Company Limited.</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Shipping/CHA/Stevedoring/C&amp;F Agency &amp; Labour Management.</p>                        
                      </div>
                      <br></br>
                      <div>
                        <p style={{ marginTop:'30px'}}><b>Address:</b> Res – Highland Home, Rau Bahadur Giriyappa Garden, Highlands, Mangalore.</p>
                        <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Office – M/s Aspinwall and Company Limited, Kulshekar, Mangalore.</p>                        
                      </div>
                      <br></br>
                      <div>
                        <p style={{ marginTop:'30px'}}><b>Personal Information:</b></p>
                        <ol type="A">
                            <li>i)Born at Kateel – A Farmer.</li>
                            <li>ii)Wife Dr. Rameela Shekhar, Mental Health Professional (Grand Daughter of Late Rao
                                    Bahadur M Giriyappa, Presidency Officer for the Madras State under the British Rule.
                                    She is the only Daughter of Late A.U Mohan – First RTO to Mangalore &amp; the Deputy
                                    Commissioner of Transport of Karnataka).</li>
                            <li>iii)Blessed with Two Children:-.</li>
                            <li>iV)Son – Dr. Avinash Shekhar, Neuro Psychiatrist, Asst. Prof. Father Mullers Medical College</li>
                            <li>Daughter – Mrs. Akshaya Shekhar, Organizational Psychologist (Regd), Sydney Australia</li>
                        </ol> 
                        <p style={{ marginTop:'15px'}}>He is proud to state that he has come up in a very hard way by working &amp; studying and as he
                            strongly believes that Education is a path way to Success. Hence he sponsors more than 3
                            lakhs per year towards educational support to under privileged needy students.</p>
                      </div>
                      <br>
                      </br>
                      <div>
                        <p style={{ marginTop:'30px'}}><b>Qualifications:</b></p>
                        <ol type="A">
                            <li>i)B.Sc; MA; L.L.B; PGDBM; PGDIRPM; PGDIEM.</li>
                            <li>ii)Custom House Agency Licensee F Card.</li>
                            <li>iii)Captain – Sr. Naval Division N.C.C., “C” Certificate, Government College, Mangalore.</li>                            
                        </ol>                        
                      </div>
                      <br>
                      </br>
                      <div>
                        <p style={{ marginTop:'30px'}}><b>Offices held in Lionism:</b></p>
                        <ol type="A">
                            <li>i)President – Lions Club, Mangalore 2019-2020.</li>
                            <li>ii)Zonal Chairperson – Region 4 – Lions Club International Dist 317 D.</li>
                            <li>iii)Region Chairperson – Region XI – Lions Club International Dist 317 D.</li>  
                            <li>iv)Best President – Lions Club Intl. Dist 317D (2019-20)</li>                          
                        </ol>                        
                      </div>

                      <div>
                        <p style={{ marginTop:'30px'}}><b>Professional Experience:</b></p>
                        <ol type="A">
                            <li>1)Trustee : Shree Gokarnanatheshwara Kshetra, Mangalore20.</li>
                            <li>2)Trustee : New Mangalore Port Trust for 8 Years.</li>
                            <li>3)Managing Trustee : Vidya Education Trust, Derebail Konchady.</li>  
                            <li>4)General Manager : M/s Indian Shipping Agencies Pvt Ltd – Service 1975-94</li> 
                            <li>5)General Manager : M/s Aspinwall &amp; Co., Ltd, - Service from 1994</li>  
                            <li>6)President : Association of New Mangalore Port Stevedores – (From 2000)</li>   
                            <li>7)President : Mangalore Steamer Agents Association – (1998 – 2000)</li> 
                            <li>8)President : Mangalore Custom House Agents Association – (1996 - 98)</li> 
                            <li>9)Secretary : Kanara Chamber of Commerce &amp; Industry – (2005 – 2008)</li>  
                            <li>10)President : Mangalore Management Association – (2007 – 2011)</li>  
                            <li>11)President : Mangalore Productivity Council – (2004 – 2008)</li>  
                            <li>12)Chairman : National Institute of Personnel Management (2009 – 2013)</li>  
                            <li>13)National Council Member: Indian Institute of Material Management – 4 Years</li> 
                            <li>14)Vice President : Shiva Bhakti Yoga Sangha – Shree Gokarnanatheshwara College</li>   
                            <li>15)Committee Member : NMPT Dock Safety Committee – 20 years</li> 
                            <li>16)EC Member : FFFAI – 4 years</li> 
                            <li>17)Member : Customs Regional Advisory Committee</li>  
                            <li>18)President Building Committee Shree Rama Mandira – Constructed Community Halls</li> 
                            <li>19)Hon. / President : Konchady Mithra Mandala from 1975 till Date</li> 
                        </ol>                        
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

export default MSHEKARPUJARI;
