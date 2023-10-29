import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import SliderComponent from "../home/hero/SliderComponent"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div className='right'>
            <Heading subtitle='SHREE GURU CHARITABLE TRUST(R)' title='' />
            <div className='item'>
              <div className='items flexSB'>
                    <div className='img'>
                      {/* <img src={val.cover} alt='' /> */}
                    </div>
                    <div className='text'>
                      {/* <h2>{val.title}</h2> */}
                      <b>
                        <p style={{ marginTop:'30px'}}>Globally, Two districts of Udupi & Dakshina Kannada, as we called it Tulu Nadu, is prominently known as the educational hub in the western coast of India with four Universities and dozens of colleges and innumerable schools. Students from all over India and even international students are studying in these temples of knowledge.  Yet it is sad that a section of local children are deprived of education due to poverty, ignorance, lack of guidance and resources.</p>
                        <br></br>  
                        <p>“Get liberated through education” preached Shri. Narayana Guru, the great saint and social reformer.  Inspired by the preaching of this renowned and revered Guru, a few followers joined together and distributed books and donated small amounts to poor children for their studies in memory of Late Susheela Somappa Suvarna way back in 1998. In the year 2002 the group distributed an amount of Rs. 15,500/- to eight deserving poor students for their education.</p>
                        <br></br>
                        <p>It was in the year 2009 this enthusiastic group formed a Trust naming “Shree Guru Charitable Trust” and the same was registered on 29.07.2009 with nine members as Trustees. Tax exemption was granted to this Trust by the Income Tax Department on 06.12.2009.  Since then, the trust grew in strength and activities increased with the participation of a few philanthropic persons and institutions.  </p>
                        <br></br>
                        <p>Presently the Trust is extending financial help to more than 450 deserving poor students amounting to Rs. 41 Lac every year. </p>
                        <br></br>
                        <p>We earnestly appeal to all our well wishers and patrons to cooperate with us in this noble cause and become partners in this worthy cause of educating the poor and downtrodden.  All contributions are exempted from tax under 80G of I.T. act.  Trust got the CSR approval due to which Corporate companies can also join the noble activities of the Trust and contribute through their CSR Fund. </p>                  
                      </b>
                    </div>                    
              </div>
            </div>
            <div className="scholarList">
            <table>
                <tr>
                    <td>YEARWISE SCHOLARSHIP DISTRIBUTION</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>YEAR</td>
                    <td>No. of Students</td>
                    <td>Amount</td>
                </tr>
                <tr>
                    <td>2005</td>
                    <td>8</td>
                    <td>15,500</td>
                </tr>
                <tr>
                    <td>2006</td>
                    <td>23</td>
                    <td>89,170</td>
                </tr>
                <tr>
                    <td>2007</td>
                    <td>71</td>
                    <td>186,456</td>
                </tr>
                <tr>
                    <td>2008</td>
                    <td>59</td>
                    <td>257,000</td>
                </tr>
                <tr>
                    <td>2009</td>
                    <td>149</td>
                    <td>443,000</td>
                </tr>
                <tr>
                    <td>2010</td>
                    <td>259</td>
                    <td>789,500</td>
                </tr>
                <tr>
                    <td>2011</td>
                    <td>245</td>
                    <td>1,174,000</td>
                </tr>
                <tr>
                    <td>2012</td>
                    <td>246</td>
                    <td>1,246,750</td>
                </tr>
                <tr>
                    <td>2013</td>
                    <td>267</td>
                    <td>1,349,500</td>
                </tr>
                <tr>
                    <td>2014</td>
                    <td>246</td>
                    <td>1,514,000</td>
                </tr>
                <tr>
                    <td>2015</td>
                    <td>272</td>
                    <td>1,807,000</td>
                </tr>
                <tr>
                    <td>2016</td>
                    <td>364</td>
                    <td>2,371,000</td>
                </tr>
                <tr>
                    <td>2017</td>
                    <td>400</td>
                    <td>2,692,500</td>
                </tr>
                <tr>
                    <td>2018</td>
                    <td>442</td>
                    <td>3,106,500</td>
                </tr>
                <tr>
                    <td>2019</td>
                    <td>481</td>
                    <td>3,298,500</td>
                </tr>
                <tr>
                    <td>2020</td>
                    <td>411</td>
                    <td>3,271,500</td>
                </tr>
                <tr>
                    <td>2021</td>
                    <td>449</td>
                    <td>3,890,000</td>
                </tr>
                <tr>
                    <td>2022</td>
                    <td>475</td>
                    <td>4,095,500</td>
                </tr>
                <tr>
                    <td>2023</td>
                    <td>479</td>
                    <td>4,091,000</td>
                </tr>
                <tr>
                    <td>TOTAL</td>
                    <td></td>
                    {/* <td>31,567,876</td> */}
                    <td>35,658,876</td>
                </tr>                  
            </table>
            </div>
          </div>
        
  
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default AboutCard
