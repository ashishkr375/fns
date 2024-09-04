import React from 'react'
import './card.css'
function Cardtar({img,name,link}) {
  return (
    <>    <div className="cardd">
        <div className="cardd-img">
            <img src={img} alt={name} />
        </div>
        <div className="cardd-content">
            <h1>{name}</h1>
            <a
              href={link}
              id="hhhh"
              target="_blank"
              rel="noopener noreferrer"
            > Visit </a>
        </div>

       
    </div>
    </>
  )
}

export default Cardtar