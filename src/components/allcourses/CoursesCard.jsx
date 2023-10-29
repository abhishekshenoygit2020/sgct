import React from "react"
import { Link } from "react-router-dom"
import "./courses.css"
import { coursesCard } from "../../dummydata"
import Heading from "../common/heading/Heading"

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <Heading   subtitle='Thanks to our associates' title='' />
        <div className='containers grid'>
          {coursesCard.map((val) => (
            
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  {
                    val.id == 95 ? <h1>{val.coursesName}<br></br>{val.title}<br></br>{val.place}</h1> : <h1>{val.coursesName}<br></br>{val.place}</h1>
                  }
                  
                            
                  <div className='rate'>
                    {/* <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''>(5.0)</label> */}
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            {/* <img src={details.dcover} alt='' /> */}
                          </div>
                          <div className='para'>                            
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        {/* <span>{details.totalTime}</span> */}
                      </>
                    ))}
                  </div>
                </div>
              </div> 

              { val.id == 4 ? <Link to='/Billavas'><button className='outline-btn'><h4>MORE</h4></button></Link> :   
                val.id == 10 ? <Link to='/MulkyYellapaSuvarna'><button className='outline-btn'><h4>MORE</h4></button></Link> :  
                val.id == 14 ? <Link to='/KavoorSundaryPoojary'><button className='outline-btn'><h4>MORE</h4></button></Link> :
                val.id == 21 ? <Link to='/NageshKoraggappa'><button className='outline-btn'><h4>MORE</h4></button></Link> :
                val.id == 100 ? <a href="https://en.wikipedia.org/wiki/Gokarnanatheshwara_Temple" ><button className='outline-btn'><h4>MORE</h4></button></a>:
                val.id == 103 ? <a href="https://www.gurubeladingalu.org" ><button className='outline-btn'><h4>MORE</h4></button></a>:  
                val.id == 5 ? <a href="https://omanbillawas.com/" ><button className='outline-btn'><h4>MORE</h4></button></a>:
                val.id == 6 ? <a href="https://www.facebook.com/billavasanghakuwait/" ><button className='outline-btn'><h4>MORE</h4></button></a>:
                val.id == 71 ? <a href="https://www.planttech.in/" ><button className='outline-btn'><h4>MORE</h4></button></a>:
                val.id == 95 ? <a href="https://ndsons.com/" ><button className='outline-btn'><h4>MORE</h4></button></a>:
                val.id == 22 ? <Link to='/MshekarPujari'><button className='outline-btn'><h4>MORE</h4></button></Link> :   
                val.id == 72 ? <Link to='/MBKuckian'><button className='outline-btn'><h4>MORE</h4></button></Link> :   
                <button className='outline-btn'><h4>MORE</h4></button>
              }
              {/* <div className='price'>
                
              </div>               */}
            </div>
          ))}
        </div>
        <Heading subtitle='We Serve... the Deserved...' title='shree guru charitable trust (R)' />
      </section>
    </>
  )
}

export default CoursesCard
