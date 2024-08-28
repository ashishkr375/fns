import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import './Sponsor.css'





function Sponsor() {
  const fees = [
    { category: 'Platinum', Price: 'Rs.3 Lakhs/3573 USD-' },
    { category: 'Gold', Price: 'Rs.2 Lakhs/2382 USD-' },
    { category: 'Silver', Price:'Rs. 1 Lakhs/1191 USD-' },
    { category: 'Bronze', Price: 'Rs. 50000/596 USD-' },

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
      <h2 className='text-2xl text-red-700'>Sponsorship</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr key={index}>
              <td>{fee.category}</td>
              <td>{fee.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-small text-center my-3 mx-4 '>FINS,2K24 welcomes industries, governmentbodies, and private organizations are requested tocontribute to the success of this conference. Allsponsorship privilages are mentioned in FINS, 2K24official website
      </p>
    </div>
    </div>
    </>
  )
}

export default Sponsor