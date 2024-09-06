import React from "react";
import img1 from "./hh.png";
import "./Camera.css";
import img2 from './micro.png'
function Abstract() {
  return (
    <>
      {/* <div className="accepted grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mx-3 md:mx-24">
        
        <Sidebar />
   
          <div className="nitp-notice">
            <Notice />
          </div>
        
      </div> */}

      {/* <div className="mx-5 md:mx-20">
      <h1 className="text-center m-10 font-bold text-xl md:text-4xl">Camera-ready Paper</h1>
        <p className="morspeaker text-center m-10 font-bold text-xl md:text-4xl"> coming soon ....</p>
    </div> */}
      <div className="mx-5 md:mx-20  cont">
        <div className="img-cont">
          <img src={img1} alt="img nit p" />
        </div>
        <div className="abstract">
          <h2 className="text-center  font-bold text-xl md:text-xl">
            Dates and Deadlines<br></br>
            Abstract submission: 1-30 Sept, 2024
            <br />
            Abstract acceptance: 5 Oct, 2024
            <br />
          </h2>
          <p className="hehe ">
            All authors are invited to submit their abstracts. The abstract
            limit should not exceed 300 words limit. The guidelines for
            submitting abstracts are mentioned below. The submitted abstracts
            were screened for oral/poster presentations and will intimated to
            the authors.
          </p>
          <div className="micro">
            <h2 className="font-bold text-xl">Download Format </h2>
          {/* <a href="https://docs.google.com/document/d/1WhvNM89H5vEBPYyKctGpvXeGf7NUdX7L/edit?usp=sharing&ouid=102606446907931183594&rtpof=true&sd=true"><img src={img2} width={200}/></a> */}
           <a
        href="https://docs.google.com/document/d/1WhvNM89H5vEBPYyKctGpvXeGf7NUdX7L/edit?usp=sharing&ouid=102606446907931183594&rtpof=true&sd=true"
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Recommended for security reasons
        className="download-link" // Optional: add a class for specific styling
      >
        <img src={img2} width={200} alt="Download Document" />
      </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abstract;
