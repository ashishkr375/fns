import React from 'react'
import { useState } from 'react';
import Countdown from 'react-countdown';
import './cout.css'

function Count() {
    const [isVisible, setIsVisible] = useState(true); // State to control popup visibility

    // Set the target time, for example, 3 days from now
    const targetTime = new Date('2024-12-21T00:00:00').getTime();
  
    // Renderer for formatting and displaying days, hours, minutes, and seconds
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <span className="timer-text">Time's up!</span>;
      } else {
        return (
          <div className="timer-circle">
            <div className="timer-text">
              <span>{String(days).padStart(2, '0')}d</span>:
              <span>{String(hours).padStart(2, '0')}h</span>:
              <span>{String(minutes).padStart(2, '0')}m</span>:
              <span>{String(seconds).padStart(2, '0')}s</span>
            </div>
            
    
          </div>
        );
      }
    };
  
    if (!isVisible) return null; // Hide the popup if it's closed
  
  return (
    <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-button" onClick={() => setIsVisible(false)}>X</button>
      <h1 className='hurry'>Hurry Up! Starting In </h1>
      <Countdown date={targetTime} renderer={renderer} />
     
    </div>
  </div>
  )
}

export default Count