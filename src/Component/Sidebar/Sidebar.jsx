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
          <Date  datetitle={" Extended Abstract submission:"} datedate={" 31 Oct , 2024(11:59 PM IST)"} />
          <Date  datetitle={"Abstract acceptance: "} datedate={"5 Oct - 7 Nov, 2024(11:59 PM IST)"} />
            <Date  datetitle={"Early registration"} datedate={" Upto 11 Nov, 2024 (11:59 PM IST)"} />
            <Date  datetitle={"Late registration:"} datedate={"after 11 Nov, 2024(11:59 PM IST)"} />
            <Date  datetitle={"Conference dates:"} datedate={"21-23 Dec, 2024(11:59 PM IST)"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
