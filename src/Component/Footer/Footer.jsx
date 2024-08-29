import React from 'react';
import './Footer.css';
import logo from '../Header/logo.jpg';

function Footer() {
  return (
    <>
    <div className='footer text-black bg-[#ffad92]'>
      <div className='footer-content grid grid-cols-1 md:grid-cols-5 mx-5 md:mx-32 gap-4 md:gap-12'>
        <div className='w-20 h-20 md:w-32 md:h-32 md:mt-10 md:ml-10 imgfooter' >
        <a 
                                    href="https://www.nitp.ac.in" 
                                    
                                    target='_blank' 
                                    rel='noopener noreferrer'
                                ><img src="https://i.postimg.cc/k5CYZwwS/logo.png" alt="logo" /></a>
        </div>
        <div className='text-left col-span-2'>
          <h2 className='text-red-950 text-xl font-extrabold'>Contact Us</h2>
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
        <div className='md:mt-10 col-span-2'>
          <h3 className='font-bold'>
          Frontiers in nanomaterials sciences: <br></br>"Aspects in biotechnology and chemical engineering "
          </h3>
        <h3>Jointly organized by Dept of Chemistry,<br></br> NIT Patna & Dept. of Chemical Engineering & Technology.</h3>
          Email: <a href="mailto:icfns2024.conf@nitp.ac.in">icfns2024.conf@nitp.ac.in          </a><br />
        </div>
      </div>
      
    </div>
    <div className='footer-bottom bg-gray-500 py-1 text-white text-center'>
    National Institute of Technology Patna - 800005, Bihar, INDIA ©2024 NIT Patna
  </div></>
  );
}

export default Footer;
