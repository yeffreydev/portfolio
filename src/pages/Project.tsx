import { useEffect, useState } from "react";
import "./../assets/css/Project.css";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { ProjectI } from "../types";
import ProjectController from "../components/ProjectController";

//functional component
function Project() {
  let params = useParams();
  let id = params.id;
  //state
  const [project, setProject] = useState<ProjectI | null>(null);
  const [start, setStart] = useState<number>(0);
  //functions
  const findProject = (id: string) => {
    return projects.find((item) => item.id === parseInt(id));
  };
  const changeProject = (project: ProjectI | null) => {
    setProject(project);
  };
  const moveRight = () => {
    if (projects.length > start + 3) {
      setStart(start + 1);
      console.log(start + 1);
    }
  };
  const moveLeft = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  //hooks
  useEffect(() => {
    changeProject(findProject(id || "") || null);
    //eslint-disable-next-line
  }, []);
  return (
    <div className="content-container">
      <div className="project content-width">
        {!project ? (
          <h1>Project not found</h1>
        ) : (
          <>
            <h1>{project?.title}</h1>
            <ProjectController idFocus={project.id} changeProject={changeProject} moveLeft={moveLeft} moveRight={moveRight} start={start} projects={projects} />
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
            <ProjectController idFocus={project.id} changeProject={changeProject} moveLeft={moveLeft} moveRight={moveRight} start={start} projects={projects} />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
