import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Notice from "./Notice/Notice";
import img from './sac.jpg'
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
        <h1 className="text-center m-20 font-extrabold text-2xl md:text-9xl">Home Content Here</h1>
      </div>
    </>
  );
}

export default Home;
