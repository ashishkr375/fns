import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Notice from "../Home/Notice/Notice";
import "./Callfor.css";
import { SpeakerData } from "../Config/SpeakerData";
import Card from "./Card/Card";
function Speaker() {
  return (
    <>
      {/* <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        <Sidebar />

        <div className="nitp-notice">
          <Notice />
        </div>
      </div> */}

      {/* <div className="mx-5 md:mx-20">
        <h1 className="text-center m-10 font-bold text-xl md:text-4xl">
          Call For Paper
        </h1>
        <p className=" text-left m-10   md:text-xl">
          {" "}
          Authors are invited to submit abstracts of original work in English in
          the accordance to the conference themes. All abstracts must be
          submitted to 
          <a
            href={`http://icfns2024.conf@nitp.ac.in`
            }
            className="notice-title text-blue-600 mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            icfns2024.conf@nitp.ac.in
          </a>
          The prescribed format for
          abstract is mentioned in FINS2K24 official website.
        </p>
      </div> */}
      <div className="mx-5 md:mx-20">
      <h1 className="speakerheading ">Confirmed Speaker :</h1>
        <div className="speakers ">
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
            <p className="morspeaker"></p>
          )}
        </div>
      </div>
    </>
  );
}

export default Speaker;
