import React from 'react'
import './Card.css'
function Card({img,name,position,institute,place}) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={img} alt="manoj singh" />
        </div>
        <div className="card-content">
            <h1>{name}</h1>
            <p>{position}</p>
            <p>{institute}</p>
            <p>{place}</p>
        </div>

       
    </div>
  )
}

export default Card