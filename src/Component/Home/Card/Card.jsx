import React from 'react'
import './Card.css'
function Card({img,name,institute,place,pre}) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={img} alt={name} />
        </div>
        <div className="card-content">
            <h1>{name}</h1>
            <p>{institute}</p>
            <p>{place}</p>
            <a
              href={pre}
              id="hhh"
              target="_blank"
              rel="noopener noreferrer"
            > Visit Profile</a>
        </div>

       
    </div>
  )
}

export default Card