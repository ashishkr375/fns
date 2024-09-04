import React from "react";
import logo from "./logo.jpg";
import "./Header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handlego = () => {
    navigate("/registration");
  }
  const [show, setShow] = useState(false);
  const style = show ? { display: "block" } : { left: "-100%" };
  const handleLinkClick = () => {
    setShow(false);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <a
              href="https://www.nitp.ac.in"
              className="notice-title"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="heading">
            {/* <h2>Frontiers in Nanomaterials Sciences:</h2>
            <h2> Aspects in Biotechnology and Chemical Engineering</h2>
            <span>(Hybrid Mode)</span> */}
            <h2>
              <p> INTERNATIONAL CONFERENCE</p>
              <p>ON</p>
              <p className="text-cyan-500 font-bold">
                FRONTIERS IN NANOMATERIALS SCIENCES:
              </p>
              <p className="text-purple-500 font-bold">
                {" "}
                ASPECTS IN BIOTECHNOLOGY AND CHEMICAL ENGINEERING
              </p>
              <p className="font-bold"> (FINS 2K24), NIT Patna Bihar India,</p>
              <p className="font-bold">21-23 December 2024</p>
              <p
                className="text-purple-500
italic"
              >
                (Hybrid Mode)
              </p>
            </h2>
          </div>
          <div className="buttonn">
            <button className="butt" onClick={()=>handlego()}>Register Now</button>
          </div>
          <div className="menu" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
        </div>
        <div className="navbar" style={style}>
          <ul>
            <li>
              <Link to="/" className="link" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/history" className="link" onClick={handleLinkClick}>
                History
              </Link>
            </li>
            <li>
              <Link to="/committees" className="link" onClick={handleLinkClick}>
                Committees
              </Link>
            </li>
            <li>
              <Link to="/speaker" className="link" onClick={handleLinkClick}>
                Speakers
              </Link>
            </li>
            <li>
              <Link
                to="/abstract"
                className="link"
                onClick={handleLinkClick}
              >
                Abstracts
              </Link>
            </li>
            <li>
              <Link to="/newupdate" className="link" onClick={handleLinkClick}>
                New Update
              </Link>
            </li>
            <li>
              <Link
                to="/schedule"
                className="link"
                onClick={handleLinkClick}
              >
                Schedule
              </Link>
            </li>
            <li>
              <Link
                to="/publication"
                className="link"
                onClick={handleLinkClick}
              >
                Publication
              </Link>
              </li>
            {/* <li>
              <Link to="/sponsor" className="link" onClick={handleLinkClick}>
                Sponsorship
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="/registration"
                className="link"
                onClick={handleLinkClick}
              >
                Registration
              </Link>
            </li> */}
            <li>
              <Link to="/travel" className="link" onClick={handleLinkClick}>
                Travel and Accommodation
              </Link>
            </li>
            <li>

              <Link to="/contact" className="link" onClick={handleLinkClick}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
