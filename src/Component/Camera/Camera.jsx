import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import './Camera.css'
function Camera() {
  return (
    <>
    <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
        <Sidebar />
   
          <div className="nitp-notice">
            <Notice />
          </div>
        
      </div>
  
      <div className="mx-5 md:mx-20">
      <h1 className="text-center m-10 font-bold text-xl md:text-4xl">Camera-ready Paper</h1>
        <p className="morspeaker text-center m-10 font-bold text-xl md:text-4xl"> coming soon ....</p>
    </div>
    </>
  )
}

export default Camera