import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import "./../assets/Header.css";
import { CgFileDocument } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
const Header = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const changeNavbarState = () => setIsOpenNavbar(!isOpenNavbar);
  return (
    <>
      <div className="header-container">
        <header id="header">
          <div className="navbar-icon" onClick={changeNavbarState}>
            {isOpenNavbar ? <FaTimes /> : <CgMenu />}

            {/* <FaTimes /> */}
          </div>
          <Link id="logo" to="/">
            <span>Y.E.</span>
          </Link>
          <div className="navbar-container">
            <Navbar isOpen={isOpenNavbar} onClickLeft={changeNavbarState} />
          </div>
          <div className="navbar-transparent"></div>
          <div id="cv-link">
            <CgFileDocument />
            <Link to="/resume">my resume</Link>
          </div>
        </header>
      </div>
      <div
        className={
          isOpenNavbar ? "navbar-mobile-active navbar-mobile" : "navbar-mobile"
        }
      >
        {/* <ul className={isOpenNavbar ? "navbar navbar-active" : "navbar"}>
          <li>
            <Link to="/">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <AiOutlineUser />
              About
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <AiOutlineFundProjectionScreen />
              Projects
            </Link>
          </li>
        </ul> */}
        <Navbar isOpen={isOpenNavbar} onClickLeft={changeNavbarState} />
      </div>
    </>
  );
};

export default Header;
