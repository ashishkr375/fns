import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className='footer text-black bg-[#ff794c]'>
      <div className='footer-content '>
        <div>
          <h2 className='text-white'>Contact Us</h2>
          <p>
            National Institute of Technology Patna<br />
            Patna, Bihar (800005), India<br />
            Phone: +91-0612-237 2715<br />
            FAX: +91-0612-2660480<br />
            <a href="https://www.google.com/maps/place/National+Institute+of+Technology+Patna/@25.6207241,85.170702,17z/data=!3m1!4b1!4m5!3m4!1s0x39ed58dce6732867:0x4059f39a1ac82f06!8m2!3d25.6207241!4d85.1728907" target="_blank" rel="noopener noreferrer">
              Find us on Google Maps
            </a>
          </p>
        </div>
        <div>
          Email: <a href="mailto:ispda2024@nitp.ac.in">ispda2024@nitp.ac.in</a><br />
        </div>
      </div>
      
    </div>
    <div className='footer-bottom bg-gray-500 py-1 text-white text-center'>
    National Institute of Technology Patna - 800005, Bihar, INDIA ©2024 NIT Patna
  </div></>
  );
}

export default Footer;
