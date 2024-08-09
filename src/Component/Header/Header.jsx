import React from "react";
import logo from './logo.jpg';
import './Header.css';
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";



function Header() {
  const [show, setShow] = useState(false);
  console.log(show);
  function handleshow(){
  }
  handleshow();
  const style = show ? {display: 'block'} : {left: '-100%'};
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="heading">
            <h2>
              Third International Conference on Security, Privacy and Data
              Analytics 
            </h2>
            <h2>  (ISPDA-2024), December 13-15, 2024</h2>
              <span>(Hybrid Mode)</span>
            
          </div>
          <div className="menu" onClick={()=>setShow(!show)}>
            <GiHamburgerMenu />
            </div>
        </div>
        <div className="navbar" style={style}>
          <ul>
            <li>
              <Link to="/" className="link">Home</Link>
            </li>
            <li>
              <Link to="/history" className="link">History</Link>
            </li>
            <li>
              <Link to="/committees" className="link">Committees</Link>
            </li>
            <li>
              <Link to="/callfor" className="link">Call For Paper</Link>
            </li>
            <li>
              <Link to="/cameraready" className="link">Camera-ready Paper</Link>
            </li>
            <li>
              <Link to="/programme" className="link">Programme</Link>
            </li>
            <li>
              <Link to="/acceptedpaper" className="link">Accepted Paper</Link>
            </li>
            <li>
              <Link to="/registration" className="link">Registraion</Link>
            </li>
            <li>
              <Link to="/contact" className="link">Contact Us</Link>
            </li>
          </ul>
          </div>
      </div>
    </>
  );
}

export default Header;
