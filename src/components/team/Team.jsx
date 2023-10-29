import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import Trustees from "./Trustees"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import MainTeamCard from "./MainTeamCard"

const Team = () => {
  return (
    <>
      {/* <Back title='' /> */}
      <section className='team padding'>  
        <h1 style={{  textAlign:'center'}}>Authors/Founders</h1>    
        <div className='containers grid4'>
          <MainTeamCard />
        </div>   
        <div className='containers grid3' style={{ marginTop:'30px'}}>
          <TeamCard />
        </div>
        <h1 style={{  textAlign:'center', marginTop: '25px'}}>Trustees</h1>       
        <div className='containers grid3' style={{ marginTop: '25px' }}>
          <Trustees />
        </div>
        <div style={{ padding: '20px'}}>
          <b>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">From</th>
                  <th scope="col">To</th>
                  <th scope="col">President</th>
                  <th scope="col">Vice President</th> 
                  <th scope="col">Secretary</th>   
                  <th scope="col">Treasurer</th>     
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">2009-10</th>
                  <td>2010-11</td>
                  <td>YOGEESHA G KOTIAN</td>
                  <td>SADANANDA SUVARNA</td>
                  <td>SEETHARAMA HOSABETTU</td>
                  <td>K VISHWANATH AMIN</td>
                </tr>
                <tr>
                  
                  <td>2011-12</td>
                  <td>2012-13</td>
                  <td>K VISHWANATH AMIN </td>
                  <td>CHANDRASHEKARA NANIL</td>
                  <td> SEETHARAMA HOSABETTU</td>
                  <td>GANESH A. BANGERA</td>                              
                </tr>
                <tr>                 
                  <td>2013-14</td>
                  <td>2014-15</td>  
                  <td>SADANANDA SUVARNA </td>
                  <td>GANESH A. BANGERA</td> 
                  <td>CHENNAKESHAV </td>
                  <td>CHANDRASHEKARA NANIL</td>                                                
                </tr>
                <tr>
                  <td>
                    2015-16
                  </td>
                  <td>
                    2016-17
                  </td>
                  <td>
                    GANESH A. BANGERA
                  </td>
                  <td>
                    CHANDRASHEKARA NANIL
                  </td>
                  <td>
                    JAYANAND M
                  </td>
                  <td>
                    RAMESHA G AMIN
                  </td>
                </tr>
                <tr>
                  <td>
                     2017-18
                  </td>
                  <td>
                    2018-19
                  </td>
                  <td>
                    CHANDRASHEKARA NANIL
                  </td>
                  <td>
                    JAYANAND M
                  </td>
                  <td>
                    RAMESHA G AMIN
                  </td>
                  <td>
                    CHANDRASHEKAR SUVARNA
                  </td>                  
                </tr>
                <tr>
                  <td>
                  2019-20
                  </td>
                  <td>
                    2020-21
                  </td>
                  <td>
                    SHYLENDRA Y SUVARNA
                  </td>
                  <td>
                    JAYANAND M
                  </td>
                  <td>
                      RAMESHA G AMIN
                  </td>
                  <td>
                      SEETHARAMA HOSABETTU
                  </td>                  
                </tr>
                <tr>
                  <td>
                  2021-22
                  </td>
                  <td>
                  2022-23
                  </td>
                  <td>
                    JAYANAND M
                  </td>
                  <td>
                  SEETHARAMA HOSABETTU
                  </td>
                  <td>
                  RAMESHA G AMIN
                  </td>
                  <td>
                  HARINDRA SUVARNA
                  </td>
                </tr>
                
              </tbody>
            </table>
            </b>
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
