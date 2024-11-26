import React from "react";
import logo from "./logo.jpg";
import img1 from "./royal1.png";
import dst from './dst3.svg';

import "./Header.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handlego = () => {
    navigate("/registration");
  };
  const [show, setShow] = useState(false);
  const style = show ? { display: "block" } : { left: "-100%" };
  const handleLinkClick = () => {
    setShow(false);
  };
  return (
    <>
      <div className="containerHead">
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
            <Link to="/" className="link" onClick={handleLinkClick}>
              <h2>
                <p className="md:text-base bottomtext">
                  {" "}
                  INTERNATIONAL CONFERENCE
                </p>
                <p className=" md:text-sm hidden md:block bottomtext">ON</p>
                <p className="text-cyan-800 font-bold">
                  FRONTIERS IN NANOMATERIALS SCIENCES:
                </p>
                <p className="text-purple-500 font-bold">
                  {" "}
                  ASPECTS IN BIOTECHNOLOGY AND CHEMICAL ENGINEERING
                </p>
                <p className="font-bold hidden md:block text-base">
                  {" "}
                  (FINS 2K24), NIT Patna Bihar India,
                </p>
                <p className="font-bold hidden md:block text-base">
                  21-23 December 2024
                </p>
                <p
                  className="text-purple-500
italic"
                >
                  (Hybrid Mode)
                </p>
              </h2>
            </Link>
          </div>
          <div className="md:flex">
            <img src={img1} alt="royal" className=" royal" />
            <img src={dst} alt="dst" className="md:h-20 h-8" />
          </div>
          <div className="buttonn">
            <div className="">
              {/* <button className="butt" onClick={()=>handlego()}>Register Now</button> */}
              <button
                class=" butt relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 "
                onClick={() => handlego()}
              >
                <span class="relative px-2 py-1 md:px-6 md:py-3 transition-all ease-in duration-75 bg-blue-50 rounded-md group-hover:bg-opacity-0 font-bold text-xs md:text-xl ">
                  Register Now📝
                </span>
              </button>
            </div>
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
              <Link to="/abstract" className="link" onClick={handleLinkClick}>
                Abstracts
              </Link>
            </li>
            <li>
              <Link to="/newupdate" className="link" onClick={handleLinkClick}>
                New Update
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="link" onClick={handleLinkClick}>
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
