import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Notice from "./Notice/Notice";
import img from "./sac.jpg";
import Card from "./Card/Card";
import { SpeakerData } from "../Config/SpeakerData";
import img3 from '../image/Screenshot 2024-09-03 004620.png';
function Home() {

  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-5 mx-5">
        <div className="leftside">
          <Sidebar />
        </div>

        <div className="md:col-span-2">
          <div className="notice-img">
            <div className="nitp-img">
              <img src={img3} alt="fins" />
            </div>
          </div>
        </div>
        <div className="nitp-notice">
          <Notice />
        </div>
      </div>
      <div className="mx-5 md:mx-20">
        {/* <h1 className="text-center m-20 font-extrabold text-2xl md:text-9xl">Home Content Here</h1> */}
        <h1 className="conthemetitle my-5 "> About FINS,2K24</h1>
        <p className=" hometext1 my-2">
        The development of nanomaterials has evolved enormously from determining their physiochemical
properties to isolating their desired properties for which they are utilized in different areas of
biomedical and chemical engineering etc. Frontiers in nanomaterials sciences (FINS) is the first
international conference that will be conducted in hybrid mode at NIT Patna to provide an broad
interdisciplinary forum for researchers, students, scientists practitioners, and industrialists across the
globe to interact and present their ideas, and concepts on progressive trends in nanomaterials based
research.
        </p>
        <h1 className="speakerheading">Venue :</h1>
        <p className=" hometext1 my-2">Meghnad Saha &Visveswaraya, Hall NIT Patna , Bihar, India</p>
        <div className="venue-container">
                <div className="image-container">
                    <img src="https://www.nitp.ac.in/static/4017376d992d9de6b8785b862bacd757/d8255/asd_1920x1080.jpg" alt="Venue" />
                </div>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.543906263619!2d85.17047352485123!3d25.620067764444084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sNational%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1725332433877!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style={{border: 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        <h1 className="speakerheading">Keynote Speaker :</h1>
        <div className="speakers">
          {SpeakerData.length > 0 ? (
            SpeakerData.map((speaker, index) => (
              <Card
                key={index}
                img={speaker.img}
                name={speaker.name}
                institute={speaker.institute}
                pre={speaker.pre}
                place={speaker.place}
              />
            ))
          ) : (
            <p className="nospeaker">Speakers comming soon.....</p>
          )}
          {SpeakerData.length > 0 && (
            <p className="morspeaker">More speakers coming soon ....</p>
          )}
        </div>
       
        <div className="conthemes">
          <h1 className="conthemetitle">Conference Themes:</h1>
          <ul className=" list-disc  contheme" >
            <li>Nanomaterials and technology</li>
            <li>Nanobiotechnology</li>
            <li>Nanomedicine</li>
            <li>Energy storage and solar cells</li>
            <li>Biomimetics and Biosensors</li>
            <li>Nanotech Environment</li>
            <li>AI/ML in Nanotech</li>
            <li>Nano surfaces and engineering</li>
            <li>Nanocatalysis and reaction engineering</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
