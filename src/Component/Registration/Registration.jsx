import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import './Registration.css'





function Registration() {
  const fees = [
    { category: 'Indian students', offline: 'Rs. 3000/-', online: 'Rs. 2000/-' },
    { category: 'Foreign students', offline: '150 USD', online: '100 USD' },
    { category: 'Indian Academicians', offline: 'Rs. 4000/-', online: 'Rs. 3000/-' },
    { category: 'Foreign Academicians', offline: '250 USD', online: '200 USD' },
    { category: 'Industry participants', offline: 'Rs. 5000/-', online: 'Rs. 4000/-' },
  ];
  return (
    <>
    <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
        <Sidebar />
   
          <div className="nitp-notice">
            <Notice />
          </div>
        
      </div>
  
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
    </div>
    <div className="registration-table">
      <h2 className='text-2xl text-red-700'>Bank Details</h2>
      <p className='text-center'>Will be Updated soon !</p>
    </div>
    <div className="registration-table">
    <h2 className='text-2xl text-red-700'>Accomodation </h2>
    <p className='text-center'>Accodmodation for deligates will be made in Guesthouse on payment basis. Accomodation forstudents will be made on NITP Hostel on paymentbasis
   <br/> *Participants needs to send priror request*</p>
   </div>
    </div>
    </>
  )
}

export default Registration