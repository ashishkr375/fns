import React from "react";
import "./Committes.css";

import committee from "./committee_fns.png";
import anni from "../image/anni.png";
import pkjain from "../image/pkjain.png";
import sub from "../image/subrata.png";
import niki from "../image/nikisweta.png";
import abhay from '../image/abhay.png';
import sanjeev from '../image/sanjeev.png';
import awadh from '../image/awadh.png';
import naik from '../image/naik.png';

function Committes() {
  const adv = [
    "Prof. Krishna N. Ganesh, Founder Director IISER Pune and Tirupati, and SERB National Chair, India. (Padma Shri awardee)",
    "Prof. Avesh K. Tyagi, Director Chemistry Group, DAE-BARC, India.",
    "Dr. Asish Lele, Director NCL Pune, India. (Shanti Swaroop Bhatnagar awardee)",
    "Prof. Liming Dai, Director ARC Centre of Excellence for Carbon Science and Innovation, UNSW, Australia. (ARC laureate fellow)",
    "Prof. Alexander M Seifalian, Director & Prof, Centre for Nanotechnology & Regenerative Medicine, UCL, England.",
    "Prof. Dr. Madhav Mallia, Member secretary, and Head Radiopharmaceutical committee, DAE-BARC, Mumbai, India.",
    "Prof. Rohit Srivastava, Prof. Dept. of Bioscience and Bio. Engg. IIT-Bombay, Mumbai, India. (Shanti Swaroop Bhatnagar & Vigyan Shri awardee)",
    "Prof. Thomas J. Webster, Prof. Northeastern University, USA. (Nobel Prize nominee Chemistry 2023)",
    "Prof. Ambarish Ghosh, Prof. CeNSE-IISc, Bengaluru, India. (Shanti Swaroop Bhatnagar awardee)",
    "Dr. Binay Saikia, Chief Scientist, CSIR-NEIST, Assam, India. (Shanti Swaroop Bhatnagar awardee)",
    "Prof. Amol Kulkarni, Chief Scientist, CSIR-NCL Pune, Maharashtra, India. (Shanti Swaroop Bhatnagar awardee)",
    "Prof. Sagar Pal, Dean R&D, and Prof. Dept. of Chem. and Chem. Bio., IIT(ISM) Dhanbad, India. (MRSI and R. D. Desai awardee)",
    "Prof. Ram Sharan Singh, HAG and BIS chai Prof. Dept. of Chem. Engg. & Tech., IIT-BHU, India.",
    "Prof. A Venu Vinod, Dean F&W & Prof. Dept. of Chem. Engg, NIT Warangal, India.",
    "Prof. Samrat Mukherjee, Dean S&W and Prof. Dept of Physics, NIT Patna.",
    "Prof. Michael S Strano, Professor Dept. of Chem. Engg, MIT, USA.",
    "Prof. Pallab Banerji, HAG Prof. Mater. Sci. Centre, IIT-Kharagpur, India.",
    "Prof. Yogesh Chandra Sharma, Prof. Dept. of Chem., IIT-BHU, India.",
    "Prof. M. Arivazhagan, Head & Professor Dept. of Chemical Engineering, NIT-Trichy, India.",
    "Prof. Ram K. Gupta, Prof. Dept. of Chem., Pittsburg State University, USA.",
    "Prof. Tarun K. Misra, Dean R&D, and Prof. Chemistry NIT Agartala, India.",
    "Prof. Pallab Ghosh, Prof. Dept. of Chemical Engineering, IIT Guwahati, India.",
    "Prof. G. Pugazhenthi, Prof. Dept. of Chemical Engineering, IIT Guwahati, India.",
    "Prof. Dr. Raghumani Singh Ningthoujam, Scientist Chem. Div. DAE-BARC, India.",
    "Prof. Arun Chattopadhyay, Prof. Dept. of Chemistry & Centre for Nanotech., IIT-Guwahati, India.",
    "Prof. Prolay Das, Professor Dept. of Chem., IIT Patna, India.",
    "Prof. Debapriya Mandal, Professor, Dept. of Chem. Engg, IIT-Jammu, India.",
    "Prof. Debabrata Mandal, Head and Assoc. Prof. Dept. of Biotech., NIPER Hajipur, India.",
    "Prof. Sahid Hussain, Assoc. Prof. Dept. of Chem., IIT Patna, India.",
    "Dr. Amitava Acharya, Principal Scientist, CSIR-IHBT, Palampur, India.",
    "Prof. Dr. Betty CA, Head N & BS Section Chem. Div. DAE-BARC, India.",
    "Prof. Subinoy Rana, Asst. Prof. Mat. Research Cent., IISc Bengaluru, India.",
    "Prof. Madhav Chavhan, Asst. Prof. Science, University of Ostrava, Czech Republic.",
    "Prof. Isha Mutreja, Asst. Prof. Dept. of Rest. Sci. University of Minnesota, USA.",
    "Prof. Shubhi Gupta, Asst. Prof. Fuel, Metals and Metallur. Engg., IIT(ISM) Dhanbad, India."
  ];
  
  return (
    <>
      <div className="mx-2 md:mx-20">
        <div className="committees-layout my-5 py-5">
          <h2 className="text-2xl text-red-700 font-bold">Meet Our Team</h2>
          <div className="min-h-screen  p-6">
            {/* Director Section */}
            <div className="text-center mb-12">
            <h3 className="text-2xl text-blue-900 font-bold text-center mb-6">
              chief Patron
            </h3>
              <img
                className="mx-auto  w-40 h-40 object-cover"
                src={pkjain}
                alt="Prof. Pradip K. Jain"
              />
              <h2 className="text-3xl font-bold text-red-600 mt-4">
                Prof. Pradip K. Jain
              </h2>
              <p className="text-gray-700 text-2xl">Director, NIT Patna</p>
            </div>

            {/* Conveners and Treasurer Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              {/* Convener */}
              <div>
                <h2 className="text-blue-900 text-2xl font-bold-normal">Convener</h2>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={sub}
                  alt="Prof. Subrata Das"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Prof. Subrata Das
                </h3>
                <p className="text-gray-700 text-xl">
                  Assoc. Prof. and Head Dept. of Chem. & Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Co-Convener */}
              <div>
              <h2 className="text-blue-900 text-2xl font-bold-normal">Co-Convener</h2>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={anni}
                  alt="Prof. Aniruddha Paul"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Prof. Aniruddha Paul
                </h3>
                <p className="text-gray-700 text-xl">
                  Asst. Prof Dept. of Chem. 
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Treasurer */}
              <div>
              <h2 className="text-blue-900 text-2xl font-bold-normal">Treasurer</h2>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={niki}
                  alt="Prof. Niki S. Jha"
                />
                <h3 className="text-xl font-semibold mt-4">
                  Prof. Niki S. Jha
                </h3>
                <p className="text-gray-700 text-xl">
                  Assoc. Prof. Dept. of Chem. 
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>
            </div>

            {/* Organising Secretaries Section */}
            <h3 className="text-2xl text-blue-900 font-bold text-center mb-6">
              Organising Secretaries
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {/* Dr. Sanjeev Verma */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={sanjeev}
                  alt="Dr. Sanjeev Verma"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Sanjeev Verma
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof  Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Dr. Awadh K. Kumar */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={awadh}
                  alt="Dr. Awadh K. Kumar"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Awadh K. Kumar
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Dr. Abhay K. Choudhary */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={abhay}
                  alt="Dr. Abhay K. Choudhary"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Abhay K. Choudhary
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof. Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>

              {/* Dr. Banavath A. K. Naik */}
              <div>
                <img
                  className="mx-auto rounded-lg w-40 h-40 object-cover"
                  src={naik}
                  alt="Dr. Banavath A. K. Naik"
                />
                <h4 className="text-xl font-semibold mt-4">
                  Dr. Banavath A. K. Naik
                </h4>
                <p className="text-gray-700 text-xl">
                  Asst. Prof  Dept. of Chem. Engg.
                  and Tech
                </p>
                <p className="text-gray-700 text-xl">NIT Patna</p>
              </div>
            </div>
          </div>
          <h1 className="text-2xl text-blue-900 font-bold text-center mb-6">
              National and International Advisory Committee members
            </h1>
          <div className="mx-30 text-center">
            {adv.map((adv, index) => (
              <div key={index} className="text-left mx-10">
                <p className="text-gray-700 text-xl mt-4">{adv}</p>
              </div>
            ))}
            </div>

        </div>
      </div>
    </>
  );
}

export default Committes;
