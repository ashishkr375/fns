import React from "react";
import "./Sidebar.css";
import Date from "./page/Date";

function Sidebar() {
  return (
    <>
      <div className="sidebar h-[45vh] pb-5">
        {/* <div className="sponsor">
          <div className="title">
            <h2 className="sidetitle">Sponsors</h2>
          </div>
        </div> */}
        <div className="important ">
          <div className="title ">
            <h2 className="sidetitle">Important Dates</h2>
          </div>
          <div className="dates px-5" >
          <Date  datetitle={" Final Abstract submission:"} datedate={" 2 December, 2024"} />
          <Date  datetitle={"Extended Abstract acceptance: "} datedate={" Till 10 December, 2024"} />
            <Date  datetitle={"Early registration"} datedate={"10 December,2024"} />
            <Date  datetitle={"Late registration:"} datedate={"after 11 Dec,2024"} />
            <Date  datetitle={"Conference dates:"} datedate={"21-23 Dec, 2024(11:59 PM IST)"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
