import React from "react";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="main scroll-y">
      <div className="main-container">
        <AboutMe />
      </div>
      <div className="main-container">
        <Skills />
      </div>
      <div className="main-container">
        <Projects />
      </div>
      <div className="main-container">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
