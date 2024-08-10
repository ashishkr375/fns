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
      <h1 className="text-center m-20 font-extrabold text-2xl md:text-9xl">Accepted Content Here</h1>
    </div>
    </>
  )
}

export default Contact