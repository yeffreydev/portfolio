import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import Footer from "../components/Footer";
import "./../assets/Projects.css";
const Project = () => {
  return (
    <div className="project">
      <div className="project-photo"></div>
      <div className="project-name">
        <span>this is a project name</span>
      </div>
      <div className="project-description">
        this is a description Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eum dolorum dolorem perferendis numquam ipsum. Maiores voluptate
        explicabo praesentium molestiae minima non, magni, natus aliquam, fugiat
        doloribus hic earum sint officiis.
      </div>
      <div className="project-links">
        <a href="https://ww">
          <BiLinkExternal /> view code
        </a>
        <a href="https://www">
          <BiLinkExternal /> code project
        </a>
      </div>
    </div>
  );
};
const Projects = () => {
  return (
    <div className="main scroll-y">
      <div className="main-content projects">
        <h1>
          My Recents <span>Works</span>
        </h1>
        <p>Here are a few projects i've worked on recently.</p>
        <p>Here are a project i've worked on.</p>
        <div className="projects-container">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
