import React from 'react'
import './Accepted.css'
import img1 from "./1.png"
import img2 from "./2.png"
import fins from "./fins.pdf"


function Schedule() {
  return (
    <>
    
        <div className="mx-5 md:mx-20">
         <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={fins}
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
    </div>
      </div>
   
    </>
  )
}

export default Schedule