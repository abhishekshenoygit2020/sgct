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

const Billavas = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div className='right'>
            <Heading subtitle='About Billawas Dubai &amp; NE Charitable Trust, Mangalore' title='' />
            <div className='itemss'>
             
              
                  <div className='itemss flexSBs'>
                    <div className='img'>
                      <img src={BSKlogo} alt='' />
                    </div>
                    <div className='text'>
                      {/* <h2>{val.title}</h2> */}
                      <div>
                        <p style={{ marginTop:'30px'}}>Dubai is one of the most preferred International Cities (country U.A.E), which attracts
                            businessmen and job aspirants from across the globe including India. Similarly many of our
                            community members do undertake their careers peacefully in this beautiful city of Dubai and
                            adjoining areas. Strength of our community in the region grew with the continuous influx of
                            people into the region largely due to the booming economy of U.A.E. With the initiative
                            taken by few enthusiastic community members, the Billawas Dubai &amp; NE (“BDNE”) was
                            formed in the year 1997 to bring and unite all the community members on a common
                            platform with a prime objective of contribution to the welfare of the under-privileged section
                            of our community back home specifically in the state of Karnataka.</p>
                      </div>
                      <br></br>
                      <div>
                        <p style={{ marginTop:'30px'}}>In line with our objectives, we have engaged ourselves in the following activities .</p>
                        <ol type="A">
                            <li>i)Educational scholarships to our community’s needy and deserving students to pursue their academic aspirations.</li>
                            <li>ii)Financial help to poor and needy patients to avail proper medical treatment.</li>
                            <li>iii)Train, sponsor and encourage the children of the community members to exhibit their talents on various platforms.</li>
                        </ol> 
                      </div>
                      <div>
                        <p style={{ marginTop:'30px'}}>While our main focus is on the above activities, we have also been extending financial assistance on a case to case basis to the below cases also –.</p>
                        <ol type="A">
                            <li>i)To construct roof over the head to very poor and needy people.</li>
                            <li>ii)Financial support to poor and destitute widows.</li>
                            <li>iii)Assistance for conducting marriages of poor girls, and.</li>
                            <li>iv)Donations for renovation of Garodies, etc. back home, to maintain the cultural heritage of Tulunadu.</li>
                        </ol> 
                      </div>


                      <div>
                        <p style={{ marginTop:'30px'}}><b>Sources behind our contributions –.</b></p>
                        <p style={{ marginTop:'30px'}}>Our main sources of income are –.</p>
                        <ol type="A">
                            <li>1)contributions from the members.</li>
                            <li>2)Savings from the various events organized by us, and the generous donations received from the well wishers.</li>                            
                        </ol> 
                        <p>
                            Every year we hold several events like Annual Day celebrations, Sports events, Pooja of
                            Brahma Shree Gurunarayana Swamy, and Family Picnics etc. Members and children from
                            our community do gather and enjoy all the entertainment and other events where community
                            members and their wards exhibit their talents and also exchange of opinions about how to
                            improve our activities. This helps to build up on our confidence to march ahead. We also
                            sponsor talented artistes, drama troupes and well known professionals from Karnataka to
                            such events to ensure that community members residing here do not miss out on such cultural
                            activities and like in Karnataka. Such gatherings helped us to exchange ideas and receive
                            suggestions which were acted upon in the best interests of our association. Such events are
                            organized by contributions from the members and contributions from our well wishers.
                        </p>
                        <br></br>
                        <p>
                            Right from the initial stage itself we have been receiving overwhelming support from the
                            resident community members. Gradually, our association grew strength by strength, as more
                            and more members joined in, who shared our aspiration of helping the deprived section of our
                            Society back home. We feel proud to note that today our membership exceeds 600 active
                            members.
                        </p>
                        <br></br>
                        <p>
                            To formalize the structure of the set up and have a transparent functioning to continue our
                            activities on an ongoing basis, we have rechristened ourselves as “Billawas Dubai &amp; NE
                            Charitable Trust” in the year 2012 by registering it with Registrar of Trusts, Mangalore, as a
                            Charitable Trust. We are able to adhere to the rules and regulations of the land with the help
                            of Auditors and legal professionals. We submit that our thrust on education of poor and needy
                            students is continuing with more vigor and determination.
                        </p>
                      </div>
                      <div>
                        <p></p>
                        <div style={{ padding: '20px'}}>
                          <b>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Details</th>
                                  <th scope="col">Amount(Rs in laths)</th>                                
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Educational scholarships to 3937 students and various other Educational institutions</td>
                                  <td>141.44</td>                               
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Medical assistance to poor patients</td>
                                  <td>26.83</td>                               
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td>Financial support to Poor and destitute widows</td>
                                  <td>9.00</td>                               
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td>Other donations</td>
                                  <td>4.00</td>                               
                                </tr>
                                <tr>
                                  <th scope="row"></th>
                                  <td>Total funds spent (Rs. One core eighty one laths and twenty seven thousand only)</td>
                                  <td>181.27</td>                               
                                </tr>
                              </tbody>
                            </table>
                          </b>
                        </div>
                      </div>
                      <div>
                        <p>
                          We could meet our noble-cum-social objectives successfully mainly due to the selfless and
                          tireless efforts and dedication of the team comprising, members, managing committee lead by
                          able Team Leaders from time to time. The contribution of the below Team Leaders
                          (President) who lead the team from front during the tenure of their designations were very
                          valuable.
                        </p>
                        <p>
                          1. Umesh Kuckian – Businessman (2004-2008)<br></br>
                          2. Mohan Attavar - Businessman (2009-2010)<br></br>
                          3. Jeetendra Suvarna - Businessman (2011-2014)<br></br>
                          4. Sathish Poojary - Insurance Professional (2015-2019)<br></br>
                          5. Prabhakar Suvarna - Accounts Professional (2020 till date)<br></br>
                        </p>
                      </div>

                      <div>
                          <p>Shree Guru Charitable Trust, Our Indispensable Partner in Service to the Society</p>
                          <p>We have been helped in fulfilling our noble objectives to a great extent by Shree Guru
                            Charitable Trust, Surathkal (SGCT), which is a well known Charitable Trust deeply involved
                            itself with many charitable activities. Strength of this Organization is its enthusiastic and
                            selfless volunteers who are always on the beck and call to meet this esteemed Organization’s
                            commitment to the Society. SGCT’s main focus is to -</p>
                            <ol>
                              <li>Identify the needy and poor students who desire financial support and proper guidance to pursue their academic career and become good and responsible citizens.</li>
                              <li>Assess their just requirements, provide them financial support, guidance and counseling.</li>
                              <li>Review regularly the progress achieved by such students to assess their eligibility for further assistance.</li>
                              <li>Many Community organizations and philanthropic individuals who desirous of contributing their mite to the needy students and poor people are undertaking such donations thru SGCT in view of their ability and transparency ways of disbursing such funds.</li>
                            </ol>
                      </div>
                      <div>
                        <p>SGCT has been providing us with great co-operation and expertise to assess and identify needy and deserving students and other beneficiaries.</p>
                        <p>Our tie up arrangements with Shree Guru Charitable Trust (“SGCT”) began in the year 2008 onwards. This has enabled our scholarship distribution system to be systematic, transparent and easy accessibility to the students as SGCT had vast capability and expertise.</p>
                        <p>As per the arrangement, the students who seek financial help -</p>
                        <ol>
                          <li>Submit the applications to either SGCT or us directly.</li>
                          <li>SGCT undertakes a thorough verification process to identify the needy and deserving students by sending their volunteers to visit the students to verify and assess the requirements of such students. They also call the students for a counselling sessions to guide them properly about their future academic careers.</li>
                          <li>Short listed students are referred to us for our final listing.</li>
                        </ol>
                      </div>
                      <div>
                        <p>We express our deep gratitude to this great Organization - Shree Guru Charitable Trust, for
                          helping Billawas Dubai &amp; NE Charitable Trust in disbursal of educational scholarships to the
                          students; we wish all the success to SGCT.</p>
                      </div>
                      <div>
                        <h1>Billawas Dubai &amp; Northern Emirates Charitable Trust,Mangalore.</h1>
                      </div>
                      <div>                       
                        <section className='blog'>
                          <div className='container'>                            
                            <div className='grid2'>                             
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={PIC1} alt='' />
                                  </div>               
                                </div>      
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic2} alt='' />
                                  </div>               
                                </div>  
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic3} alt='' />
                                  </div>               
                                </div>  
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic4} alt='' />
                                  </div>               
                                </div>  
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic5} alt='' />
                                  </div>               
                                </div>  
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic6} alt='' />
                                  </div>               
                                </div>  
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic7} alt='' />
                                  </div>               
                                </div>   
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic8} alt='' />
                                  </div>               
                                </div>     
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic9} alt='' />
                                  </div>               
                                </div>  
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic11} alt='' />
                                  </div>               
                                </div>     
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic12} alt='' />
                                  </div>               
                                </div>      
                                <div className='items shadow'>
                                  <div className='img'>
                                    <img src={pic13} alt='' />
                                  </div>               
                                </div>                                                    
                            </div>
                          </div>
                        </section>
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
