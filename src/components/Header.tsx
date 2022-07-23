import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import "./../assets/Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <header id="header">
        <a id="logo" href="#about_me">
          <span>My Logo</span>
        </a>
        <Navbar />
        <div id="cv-link">
          <Link to="/cv">download cv</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
