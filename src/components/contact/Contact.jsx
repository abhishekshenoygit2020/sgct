import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8105223319076!2d74.79949241482213!3d12.983967690847777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba351ed0e054d33%3A0x6bdabf6801e5d8ab!2sLakshmidas%20Jewellers%2C%20Surathkal!5e0!3m2!1sen!2sin!4v1681220093213!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      {/* <Back title='Contact us' /> */}
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
          

            <div className='items grid1'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>SHREE GURU CHARITABLE TRUST (R )</p>            
                <p>“SUSHEELAANAND”, FIRST FLOOR, SATISH COMPLEX</p>
                <p>OPPOSITE GOVINDA DASA COLLEGE </p>
                <p>SURATHKAL P.O</p>
                <p>MANGALURU TALUK</p>
                <p>DAKISHINA KANNADA DISTRICT</p>
                <p>KARNATAKA STATE</p>
                <p>INDIA</p>
                <p>PIN CODE : 575014</p>
              </div>
              
              <div className='box'>
                
                <p>Contact No. : 9449205833 / 7259218894/ 9880629183</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>yogisgct@gmail.com</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
           </form>

           
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
