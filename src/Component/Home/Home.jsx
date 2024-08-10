import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Notice from "./Notice/Notice";
import img from './sac.jpg'
function Home() {
  return (
    <>
      <div className="accepted">
        <div className="leftside">
          <Sidebar />
        </div>
        <div className="rightside">
          <div className="notice-img">
            <div className="nitp-img">
              <img src={img} alt="nitp" />
            </div>
            <div className="nitp-notice">
              <Notice />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
