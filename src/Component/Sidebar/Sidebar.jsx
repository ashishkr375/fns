import React from "react";
import "./Sidebar.css";
import Date from "./page/Date";

function Sidebar() {
  return (
    <>
      <div className="sidebar h-[45vh] pb-5">
        <div className="sponsor">
          <div className="title">
            <h2 className="sidetitle">Sponsors</h2>
          </div>
        </div>
        <div className="important ">
          <div className="title ">
            <h2 className="sidetitle">Important Dates</h2>
          </div>
          <div className="dates px-5" >
          <Date  datetitle={"Notification for Acceptance:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
          <Date  datetitle={"Camera-Ready Submission & Registration deadline:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
            <Date  datetitle={"Notification for Acceptance:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
            <Date  datetitle={"Notification for Acceptance:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
            <Date  datetitle={"Camera-Ready Submission & Registration deadline:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
            <Date  datetitle={"Notification for Acceptance:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
            <Date  datetitle={"Camera-Ready Submission & Registration deadline:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
            <Date  datetitle={"Camera-Ready Submission & Registration deadline:"} datedate={"31st August, 2024 (11:59 PM IST)"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
