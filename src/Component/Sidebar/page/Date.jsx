import React from 'react'
import './Date.css'

function Date({datetitle, datedate}) {
  return (
    <>
    <div className="datetype">
              <h3 className="datetitle ">{datetitle}</h3>
              <h3 className="datedate">{datedate}</h3>
    </div>
    </>
  )
}

export default Date