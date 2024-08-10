import React from 'react'
import './Committes.css'
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'

function Committes() {
  const committeeMembers = [
    { role: 'Chief Patron', name: 'Prof. Dr. P. K. Jain (Director NITP)', image: 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1uHLAWL2-T5vA-QeUJyISAqSlRp7kyOeW' },
    { role: 'Convener', name: 'Dr. Subrata Das (Head Dept. of Chem and Chem. Eng and Tech, NIT Patna)', image: 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1JDx-0LS5pxsMcYpcyAFBbq3If3Kfubcg' },
    { role: 'Co-convener', name: 'Dr. Aniruddha Paul (Dept. of Chem)', image: null },
    { role: 'Treasurer', name: 'Dr. N. S. Jha (Dept. of Chem)', image: null },
    { 
      role: 'Organising Secretary', 
      names: [
        'Dr. Sajeev Verma (Dept. of Chem)',
        'Dr. A. Kumar (Dept. of Chem)',
        'Dr. B. A. K Naik (Dept. of Chem)',
        'Dr. A. K. Choudhary (Dept. of Chem)'
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