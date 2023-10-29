import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import SliderComponent from "../home/hero/SliderComponent"
import  PIC1 from "../../assets/Images/BDNE/PIC1.jpg";
import MP from "../../assets/Images/BDNE/mp.jpeg";
import MB from "../../assets/Images/BDNE/MBKuckian.jpg";

const MBKuckian = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='containers'>
          {/* <div className='left row carou'>                        
            <SliderComponent />            
          </div> */}
          <div className='right'>
            <Heading subtitle='Late Shri M. B Kuckian' title='' />
            <div className='itemss'>            
              
                  <div className='itemss flexSBs'>
                    <div className='img'>
                      <img src={MB} alt='' />
                    </div>
                    <div className='text'>                      
                      <div>
                        <p style={{ marginTop:'30px'}}>
                        In the late 1940`s, a 12-year-old boy hailing from a small village near Mulky (Bobari) wanted to pursue further studies. Parents had limited means to support and providing 2 meals in a day to him and his other siblings was a challenge. Spending on education would have been a luxury. One day he decided to write a letter to his primary school teacher who had moved to Mumbai to send him money so that he could continue his studies.  After a few months his perseverance paid off and the kindhearted teacher agreed to get him admitted to a school in Mumbai, however the boy had to manage to arrange his commute on his own.
                        </p>
                        <p style={{ marginTop:'30px'}}>
                        Again, after requesting many relatives, he finally managed to get Rs 2/- for his ticket and reached Mumbai. Working during the day, studying, and sleeping under the streetlights at Fort Mumbai, he graduated from Night school and College.
                        </p>
                        <p style={{ marginTop:'30px'}}>
                        Decades later after owning many canteens and restaurants he completed his PHD in Kannada Literature from Mysore University at the age of 60.  He went on to become a famous author publishing various award-winning books in Kannada. He was also the editor of a monthly Kannada magazine “Akshaya” for almost 30 years.  On account of his service to the society at large he became the President of The Billawa Association Mumbai and also served as the Chairman of The Bharat Co-op Bank Ltd.  
                        </p>
                        <p style={{ marginTop:'30px'}}>
                        In spite of all the success he never forgot how a small help from his schoolteacher and his relatives helped him get educated and become successful in life. He always said that one should give back to society in multiples of what one receives from it. During his lifetime he supported many needy students and helped them achieve their dreams. Even today, in many institutions, annually a gold coin is presented in his name to promising students to motivate them to pursue and achieve more.
                        </p>
                        <p style={{ marginTop:'30px'}}>
                        I still remember my father’s moist eyes when as a qualified Chartered Accountant, I showed my appointment letter of Times of India, the same company he used to work in the canteen during the day while studying at night. Sometimes a small help can go miles in shaping one’s life. Late Shri M.B Kuckian is no longer with us, but his thoughts, kind deeds and wise words will always motivate all of us. I believe the work towards building a society my father dreamt of needs to continue. A society where no child is deprived of the education which they deserve. 

- Vinesh Kuckian
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

export default MBKuckian;
