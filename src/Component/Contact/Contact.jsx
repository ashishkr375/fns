import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import "./Contact.css"
function Contact() {
  return (
    <>
    <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
        <Sidebar />
   
          <div className="nitp-notice">
            <Notice />
          </div>
        
      </div>
  
      <div className="mx-5 md:mx-20">
     <div className="contact">
        <h1 className="text-3xl font-bold text-center mt-5 brown">Contact Us</h1>
        <div className="contact-info">
          
        <p className='text-xl text-center'>
            National Institute of Technology Patna<br />
            Patna, Bihar (800005), India<br />
            Phone: +91-0612-237 2715<br />
            FAX: +91-0612-2660480<br />
            <a className='blue' href="https://www.google.com/maps/place/National+Institute+of+Technology+Patna/@25.6207241,85.170702,17z/data=!3m1!4b1!4m5!3m4!1s0x39ed58dce6732867:0x4059f39a1ac82f06!8m2!3d25.6207241!4d85.1728907" target="_blank" rel="noopener noreferrer">
              Find us on Google Maps
            </a>
          </p>

        </div>
         
     </div>
    </div>
    </>
  )
}

export default Contact