import React from 'react'
import './Accepted.css'
import img1 from "./1.png"
import img2 from "./2.png"


function Schedule() {
  return (
    <>
  
    {/* <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
          <Sidebar />
     
            <div className="nitp-notice">
              <Notice />
            </div>
          
        </div> */}
    
        <div className="mx-5 md:mx-20">
        <div>
          <img src={img1} />
          <img src={img2} />
        </div>
      </div>
   
    </>
  )
}

export default Schedule