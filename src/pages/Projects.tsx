import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import Footer from "../components/Footer";
import "./../assets/Projects.css";
const Project = ({
  name,
  description,
  linkProjectView,
  linkCode,
  imgSrc,
}: {
  name: string;
  description: string;
  linkCode: string;
  imgSrc: string;
  linkProjectView: string;
}) => {
  return (
    <div className="project">
      <div className="project-photo">
        <img src={imgSrc} alt="img project" />
      </div>
      <div className="project-name">
        <span>{name}</span>
      </div>
      <div className="project-description">{description}</div>
      <div className="project-links">
        <a target={"_blank"} href={linkProjectView}>
          <BiLinkExternal /> view project
        </a>
        <a target={"_blank"} href={linkCode}>
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
          <Project
            imgSrc="https://shots.codepen.io/yefrey-espinoza/pen/abExgXo-512.webp?version=1652119391"
            linkCode="https://codepen.io/yefrey-espinoza/pen/abExgXo"
            linkProjectView="https://codepen.io/yefrey-espinoza/full/abExgXo"
            name="Build a Survey form"
            description="I am build a survey from project for learn and practice web desing for freecodecampr certificate"
          />
          <Project
            imgSrc="https://shots.codepen.io/yefrey-espinoza/pen/bGaJaem-512.webp?version=1652119264"
            linkCode="https://codepen.io/yefrey-espinoza/pen/bGaJaem"
            linkProjectView="https://codepen.io/yefrey-espinoza/full/bGaJaem"
            name="build a tribute page"
            description="in this project i am build a tribute page for BadBunny spanish singer"
          />
          <Project
            imgSrc="https://shots.codepen.io/yefrey-espinoza/pen/zYpQKxO-512.webp?version=1652197521"
            linkCode="https://codepen.io/yefrey-espinoza/pen/zYpQKxO"
            linkProjectView="https://codepen.io/yefrey-espinoza/full/zYpQKxO"
            name="build a technical documental page"
            description="in this project i am create a documentation for dart programing language and add to project for my certificate"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
