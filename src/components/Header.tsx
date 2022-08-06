import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import "./../assets/Header.css";
import { CgFileDocument } from "react-icons/cg";

const Header = () => {
  return (
    <div className="header-container">
      <header id="header">
        <Link id="logo" to="/">
          <span>Y.E.</span>
        </Link>
        <Navbar />
        <div id="cv-link">
          <CgFileDocument />
          <Link to="/resume">my resume</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
