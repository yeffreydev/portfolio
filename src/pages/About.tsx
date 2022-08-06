import React from "react";
import AboutFirst from "../components/AboutFirst";
import "./../assets/AboutMe.css";
import Skillset from "../components/Skillset";
import Footer from "../components/Footer";
import ToolsIuse from "../components/ToolsIuse";
import DaysICode from "../components/DaysICode";
const AboutMe = () => {
  return (
    <div id="about_me" className="main scroll-y">
      <div className="main-content">
        <AboutFirst />
        <Skillset />
        <ToolsIuse />
        <DaysICode />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
