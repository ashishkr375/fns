import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Notice from "./Notice/Notice";
import img from "./sac.jpg";
import Card from "./Card/Card";
import { SpeakerData } from "../Config/SpeakerData";
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
              <img src={img} alt="nitp" />
            </div>
          </div>
        </div>
        <div className="nitp-notice">
          <Notice />
        </div>
      </div>
      <div className="mx-5 md:mx-20">
        {/* <h1 className="text-center m-20 font-extrabold text-2xl md:text-9xl">Home Content Here</h1> */}
        <p className=" hometext1">
          The development of nanomaterials has evolved enormously from
          determining their physiochemical properties to isolating their desired
          properties for which they are utilized in different sectors of
          biotechnology and chemical engineering etc. Combining sustainability
          with the development of novel nanomaterials will circumvent the
          harmful effects on both human health and the environment. Frontiers in
          Nanomaterial Sciences (FINS) is an international conference in a
          hybrid mode that provides an interdisciplinary forum for researchers,
          students, scientists, practitioners, and industrialists across the
          globe to meet up and present their ideas, concepts, and modern
          progressive trends in nanomaterials-based research.
        </p>
        <h1 className="speakerheading">Keynote Speaker :</h1>
        <div className="speakers">
          {SpeakerData.length > 0 ? (
            SpeakerData.map((speaker, index) => (
              <Card
                key={index}
                img={speaker.img}
                name={speaker.name}
                institute={speaker.institute}
                position={speaker.position}
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
