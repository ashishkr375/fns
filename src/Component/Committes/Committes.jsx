import React from 'react'
import './Committes.css'
import Sidebar from '../Sidebar/Sidebar'
import Notice from '../Home/Notice/Notice'
import committee from './committee_fns.png'
import img2 from '../image/anirudhh.png'

function Committes() {
  // const committeeMembers = [
  //   { role: 'Chief Patron', name: 'Prof. Dr. P. K. Jain (Director NITP)', image: 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1uHLAWL2-T5vA-QeUJyISAqSlRp7kyOeW' },
  //   { role: 'Convener', name: 'Dr. Subrata Das (Head Dept. of Chem and Chem. Eng and Tech, NIT Patna)', image: 'https://drive.google.com/thumbnail?authuser=0&sz=w320&id=1JDx-0LS5pxsMcYpcyAFBbq3If3Kfubcg' },
  //   { role: 'Co-convener', name: 'Dr. Aniruddha Paul (Dept. of Chem)', image: img2 },
  //   { role: 'Treasurer', name: 'Dr. N. S. Jha (Dept. of Chem)', image: img1 },
  //   { 
  //     role: 'Organising Secretary', 
  //     names: [
  //       'Dr. Sajeev Verma (Dept. of Chem)',
  //       'Dr. A. Kumar (Dept. of Chem)',
  //       'Dr. B. A. K Naik (Dept. of Chem)',
  //       'Dr. A. K. Choudhary (Dept. of Chem)'
  //     ], 
  //     image: null 
  //   },
  //   { 
  //     role: 'Advisory committee', 
  //     names: [
  //       'Prof. Alexander M Seifalian, University College London',
  //   'Prof. Liming Dai, UNSW Sydney',
  //   'Prof. Ram Gupta, Pittsburg State University, USA',
  //   'Dr. Madhav Chanvan, University of Ostrava, Czech Republic',
  //   'Dr. Isha Mutreja, University of Minnesota, USA',
  //   'Prof. M. Arivazhagan, NIT Trichy',
  //   'Prof. Debapriya Mandal, IIT Jammu',
  //   'Prof. Sagar Pal, IIT ISM Dhanbad',
  //   'Prof. Tarun Kumar Misra, NIT Agartala',
  //   'Dr. Subinoy Rana, IISc Bengaluru',
  //   'Prof. Ambarish Ghosh, IISc Bengaluru',
  //   'Prof. Prolay Das, IIT Patna',
  //   'Dr. Amitava Acharya, CSIR-IHBT',
  //   'Prof. Binay Saikia, CSIR-NEIST',
  //   'Prof. Arun Chattopadhyay, IIT Guwahati',
  //   'Prof. Rohit Srivastava, IIT Bombay',
  //   'Prof. Samrat Mukherjee, NIT Patna',
  //   'Prof. Betty CA, BARC Mumbai',
  //   'Prof. KN Ganesh, IISER Pune and Tirupati',
  //   'Prof. Debabrata Mandal, NIPER Hajipur',
  //   'Prof. A Venu Vinod, NIT Warangal',
  //   'Dr. Bhawna Verma, IIT BHU Varanasi',
  //   'Dr. Tapas Das, NIT Rourkela',
  //   'Dr. Shivani Verma, Doon University, Dehradun',
  //   'Dr. Shubhi Gupta, IIT ISM Dhanbad'
  //   ],
    
  //     image: null 
  //   }
  // ];
  return (
    <>
   {/* <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
        <Sidebar />
   
          <div className="nitp-notice">
            <Notice />
          </div>
        
      </div> */}
  
      <div className="mx-2 md:mx-20">
      <div className="committees-layout my-5 py-5">
      <h2 className='text-2xl text-red-700 font-bold'>Meet Our Team</h2>

      <div>
        < img src={committee}>
        </img>
      </div>

      {/* {committeeMembers.map((member, index) => (
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
      ))} */}
    </div>
    </div>
    </>
  )
}

export default Committes