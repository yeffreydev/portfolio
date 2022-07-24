import React from "react";
import "./../assets/Projects.css";
const ProjectItem = () => {
  return <div className="project-item"></div>;
};
const Projects = () => {
  return (
    <div id="projects" className="main-content">
      <div className="projects-head">
        <h3>My Projects</h3>
      </div>
      <div className="projects-contain-carousel">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
