import React from 'react';
import Cardtar from './Card/Cardtar';
import './Travel.css';
import img1 from './ginger.png';
import img2 from './lemon.png';
import img3 from './maurya.png';
import img4 from './Panache.png';
import img5 from './taj.png';

function Travel() {
  const accom = [
    { img: img1, name: "The Ginger Patna", link: "https://www.gingerhotels.com/ginger-patna" },
    { img: img2, name: "The Lemon Tree", link: "https://www.lemontreehotels.com" },
    { img: img3, name: "The Maurya", link: "https://www.maurya.com" },
    { img: img4, name: "Panache Hotel", link: "https://www.thepanache.com" },
    { img: img5, name: "The Taj", link: "https://www.tajhotels.com" },
  ];

  return (
    <div className="mx-5 md:mx-20">
      <h2 className='text-2xl text-red-700 text-center font-bold'>
        Travel And Accommodation
      </h2>
      <p className='my-2 text-xl'>
        Accommodation facilities for all speakers are made at the institute’s guest house on a payment basis.
        Accommodation facilities for all students/participants are made at NIT Patna hostels on a payment basis (limited slots are available).
      </p>
      <h2 className='text-2xl text-red-700 text-left font-bold'>
        Other premium accommodation facilities:
      </h2>
      <div className='harshh'>
        {accom && accom.map((tra, index) => (
          <Cardtar key={index} name={tra.name} img={tra.img} link={tra.link} />
        ))}
      </div>
    </div>
  );
}

export default Travel;
