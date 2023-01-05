import React, { useEffect, useState } from "react";
import "./../assets/css/Project.css";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { ProjectI } from "../types";
function Project() {
  let params = useParams();
  let id = params.id;
  const [project, setProject] = useState<ProjectI | null>(null);
  useEffect(() => {
    let findItem = projects.find((i) => i.id.toString() === id);
    setProject(findItem || null);
    console.log(findItem);
  }, []);
  return (
    <div className="content-container">
      <div className="project content-width">
        <h1>{project?.title}</h1>
        <div className="controller">
          <button>{"<<"}</button>
          <button>1</button>
          <button className="focus">2</button>
          <button>3</button>
          <button>{">>"}</button>
        </div>
        <p>{project?.description}</p>
        <div className="carousel-imgs">
          <span className="left-row">{"<<"}</span>
          <span className="right-row">{">>"}</span>
          <div className="img focus"></div>
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
        </div>
        <div className="tech-list">
          <h3>technologies use in this project</h3>
          <ul>
            <li>React</li>
            <li>Css</li>
            <li>JSX/TSX</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;
