import React from 'react'
import './Committes.css'
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import img1 from '../image/nikisweta.png'
import img2 from '../image/anirudhh.png'

function Committes() {
  const committeeMembers = [
    { role: 'Chief Patron', name: 'Prof. Dr. P. K. Jain (Director NITP)', image: 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1uHLAWL2-T5vA-QeUJyISAqSlRp7kyOeW' },
    { role: 'Convener', name: 'Dr. Subrata Das (Head Dept. of Chem and Chem. Eng and Tech, NIT Patna)', image: 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1JDx-0LS5pxsMcYpcyAFBbq3If3Kfubcg' },
    { role: 'Co-convener', name: 'Dr. Aniruddha Paul (Dept. of Chem)', image: img2 },
    { role: 'Treasurer', name: 'Dr. N. S. Jha (Dept. of Chem)', image: img1 },
    { 
      role: 'Organising Secretary', 
      names: [
        'Dr. Sajeev Verma (Dept. of Chem)',
        'Dr. A. Kumar (Dept. of Chem)',
        'Dr. B. A. K Naik (Dept. of Chem)',
        'Dr. A. K. Choudhary (Dept. of Chem)'
      ], 
      image: null 
    },
    { 
      role: 'Advisory committee', 
      names: [
        'Prof. Ram Gupta, Pittsburg State Univ, USA',
        'Prof. Prabir Patra, Univ. Bridgeport, USA',
        'Prof. Raphael Schneider, Univ. Lorraine, FRA',
        'Prof. Byung Hee Hong, SNU, South Korea',
        'Prof. Miqin Zhang, Univ. Washington, USA',
        'Prof. Anton Naumov, TCU, USA',
        'Prof. Ashok Mulchandi, UC Riverside, USA',
        'Prof. Madhav Chanvan, Univ. Ostrava, Czech',
        'Prof. Isha Mutreja, Univ. of Minnesota, USA',
        'Prof. Subinoy Rana, IISc Bengaluru',
        'Prof. Proloy Das, IIT Patna',
        'Prof. Mrinmoy De, IISc Bengaluru',
        'Dr. Binoy K Saikia, CSIR NEIST',
        'Prof. Narayan Pradhan, IACS Kolkata',
        'Prof. Arun Chattopadhyay, IIT Guwahati',
        'Prof. A Venu Vinod, NIT Warangal',
        'Dr. Tapas Kuila, CSIR-CMERI',
        'Prof. Sahid Hussain, IIT Patna',
        'Prof. Parameswar K. Iyer, IIT Guwahati',
        'Prof. Samrat Mukherjee, NIT Patna',
        'Prof. SK Sahu, IIT (ISM), Dhanbad',
        'Prof. GC Nayak, IIT (ISM), Dhanbad',
        'Prof. Tapas Das, NIT Rourkela',
        'Prof. Jayesh Bellare, IIT Bombay',
        'Prof. Rohit Srivastava, IIT Bombay',
        'Prof. Mrinmoy De, IISc Bengaluru',
        'Prof. Suvankar Dasgupta, NIT Patna'
    ],
    
      image: null 
    }
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
      <div className="committees-layout">
      <h2 className='text-2xl text-red-700 font-bold'>Committees</h2>
      {committeeMembers.map((member, index) => (
        <div key={index} className="committee-section">
          <h3>{member.role}</h3>
          {member.names ? (
            <ul className="names-list pl-12">
              {member.names.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          ) : (
            <div className="member-info">
               {member.image && <img src={member.image} alt={member.role} className="committee-image" />}
              <span className='pl-10'>{member.name}</span>
             
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Committes