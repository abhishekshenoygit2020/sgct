import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container'>
          {/* <div className="row">
            <div className='col-sm-12 box logo'>
              <h1>SHREE GURU CHARITABLE TRUST</h1>
              <span>ONLINE EDUCATION & LEARNING</span>
              <p>Educating the poor children of our society is the aim and an ardent mission of our trust.</p>

              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
            </div>
          </div>           */}
          {/* <div className="col-lg-4 col-sm-12">
            <div className='box link'>
              <h3>Explore</h3>
              <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Courses</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>         */}
          {/* <div className="col-lg-4 col-sm-12">
            <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          </div> */}
          {/* <div className="col-lg-4 col-sm-12">
            <div className='box last'>
              <h3>Have a Questions?</h3>
              <ul>
                <li>
                  <i className='fa fa-map'></i>
                  Coastal tyres building, Opposite Govinda Dasa College,surathkal, Mangaluru -575014 
                </li>
                <li>
                  <i className='fa fa-phone-alt'></i>
                  Phone:0824-2475020
                </li>
                <li>
                  <i className='fa fa-paper-plane'></i>
                  info@yourdomain.com
                </li>
              </ul>
            </div>
          </div>   */}
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This id designed <i className='fa fa-heart'></i> by Thaniya technologies
        </p>
      </div>
    </>
  )
}

export default Footer
