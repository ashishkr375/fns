import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import './Registration.css'





function Registration() {
  const fees = [
    { category: 'Indian students', offline: 'Rs. 3400/-', online: 'Rs. 2200/-' },
    { category: 'Foreign students', offline: '150 USD', online: '100 USD' },
    { category: 'Indian Academicians', offline: 'Rs. 4500/-', online: 'Rs. 3500/-' },
    { category: 'Foreign Academicians', offline: '250 USD', online: '200 USD' },
    { category: 'Industry participants', offline: 'Rs. 5500/-', online: 'Rs. 4500/-' },
  ];
  return (
    <>
    {/* <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
        <Sidebar />
   
          <div className="nitp-notice">
            <Notice />
          </div>
        
      </div> */}
  
      <div className="mx-5 md:mx-20">
     
      <div className="registration-table">
      <h2 className='text-2xl text-red-700'>Registration Fees</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Offline</th>
            <th>Online</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td>{fee.category}</td>
              <td>{fee.offline}</td>
              <td>{fee.online}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-center'>* All registration fees are including applicable tax</p>
      <p className='font-extrabold'>Dates and Deadlines<br></br></p><p>
(i)  Early bird registration: Upto 11 Nov, 2024 <br></br>

(ii) Late registration: after 11 Nov, 2024 (additional charges of Rs. 500 (for Indians) and 10 USD for foreign students/delegates is applicable)
<br></br>
(iii) Accompanying person charges: Rs. 2000/30 USD
</p>
    </div>
    <div className="registration-table md:mx-96">
      <h2 className='text-2xl text-red-700'>Bank Details</h2>
      <div className=''>
      <p className='font-bold text-left'>Registration amount has to be made in favor of :<br></br></p>
      <p className='text-left'>
        Name of the account : NIT Patna CF Account<br></br>
        Current Account No. : 50433562364<br></br>
        IFSC Code : IDIB000B810<br></br>
        Bank Name : Indian Bank<br></br>
        Branch : NIT Patna
      </p></div>
    </div>
    
    <div className="registration-table">
    <h2 className='text-2xl text-red-700'>Accomodation </h2>
    <p className='text-center'>Accodmodation for deligates will be made in Guesthouse on payment basis. Accomodation forstudents will be made on NITP Hostel on paymentbasis
   <br/> *Participants needs to send priror request*</p>
   </div>
   
   <div className="iframe-container">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScgiem0jgb92n8Zhdpzp4PgLmjry-iSFvKrc5dyTWVHLyJNSA/viewform?embedded=true"
      
        title="Google Form"
      >
        Loading…
      </iframe>
    </div>
    </div>

    </>
  )
}

export default Registration