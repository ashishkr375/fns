import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Notice from "./Notice/Notice";
import img from "./sac.jpg";
import Card from "../Speaker/Card/Card";
import { SpeakerData } from "../Config/SpeakerData";
import img3 from '../image/Screenshot 2024-09-03 004620.png';
import Count from "../Config/Count";
function Home() {

  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-5 mt-5 mx-5">
        <div className="leftside md:col-span-3">
          <Sidebar />
        </div>

        <div className="md:col-span-4">
          <div className="notice-img">
            <div className="nitp-img">
              <img src={img3} alt="fins" />
            </div>
          </div>
        </div>
        <div className="nitp-notice md:col-span-3">
          <Notice />
        </div>
      </div>
      <div className="mx-5 md:mx-20">
        <Count />
        {/* <h1 className="text-center m-20 font-extrabold text-2xl md:text-9xl">Home Content Here</h1> */}
        <h1 className="conthemetitle my-5 "> About FINS,2K24</h1>
        <p className=" hometext1 my-2">
        National Institute of Technology Patna India, proudly announces the hosting of 1st international conference on "Frontiers in Nanomaterials Sciences: Aspects in Biotechnology and Chemical Engineering (FINS 2K24)" that is jointly organised by the combined efforts from the Department of Chemistry and Department of Chemical Technology. Nanomaterials represents a plethora of inorganic/organic materials that are as small as one-billionth of a meter. The diverse physiochemical properties within these materials makes it one of the most researched materials for development of newer technologies in today’s world and will continue in future as well. As such the progress in utilizing these nanomaterials in the field of nanobiotechnology and chemical engineering-based research are still at its infancy. Hence, the motto of our conference is to provide an international forum for researchers, students, scientists, laureates, and industrialists across the globe to interact and present their ideas regarding the cutting-edge research, and concepts on progressive trends in nanomaterials-based research concerning to the broader sectors of nanobiotechnology and chemical engineering. 
FINS,2K24 is a three-day programme that is scheduled to be conducted from 21st to 23rd December, 2024 in both off-line as well as online mode. The major thrust areas for the conference include developments in the fields of:
The symposium will seek to foster stronger collaboration between academia and industry, driving the practical implementation of nanomaterials in real-world applications. The conference will feature keynote speeches, invited talks, panel discussions and showcase the rich diverse culture of Bihar, India on a global scale.  
The accepted conference papers will be published in proceedings, Scopus/SCI approved journals based on the scientific suitability of the manuscripts decided by the peer-review team 

        </p>
        <h1 className="speakerheading">Venue :</h1>
        <p className=" hometext2 " >Meghnad Saha &Visveswaraya, Hall NIT Patna , Bihar, India</p>
        <div className="venue-container">
                <div className="image-container">
                    <img src="https://i.postimg.cc/q4nXgc78/nit-patna-001.jpg" alt="Venue" />
                </div>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.543906263619!2d85.17047352485123!3d25.620067764444084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1725332433877!5m2!1sen!2sin" 
                        width="900" 
                        height="450" 
                        style={{border: 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        
       
        <div className="conthemes">
          <h1 className="conthemetitle">Conference Themes:</h1>
          <div className="fle">
          <ul className="list-disc contheme">
    <li>Nanomaterials and technology</li>
    <li>Nanobiotechnology</li>
    <li>Nanomedicine and Nanoenzymes</li>
    <li>Energy storage devices and solar cells</li>
    <li>Sensors and devices</li>
  </ul>
  <ul className="list-disc contheme">
    <li>Environmental Nanotechnology</li>
    <li>Nanotechnology in AI/ML</li>
    <li>Nano surfaces and engineering</li>
    <li>Nano catalysis</li>
    <li>Nanotherapeutics</li>
  </ul>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
