import { useEffect, useRef, useState } from "react";
import "./../assets/css/Project.css";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { ProjectI } from "../types";
import ProjectController from "../components/ProjectController";
//components
const ImgsCarousel = ({ imgs }: { imgs: string[] }) => {
  let div = useRef<HTMLDivElement>(null);
  function scrollHorizontalRight() {
    if (div.current) {
      div.current.scrollTo({ left: div.current.scrollLeft + 300, behavior: "smooth" });
    }
  }
  function scrollHorizontalLeft() {
    if (div.current) {
      div.current.scrollTo({ left: div.current.scrollLeft - 300, behavior: "smooth" });
    }
  }
  return (
    <div className="project-img-carousel">
      <button className="left-row" onClick={scrollHorizontalLeft}>
        {"<<"}
      </button>
      <button className="right-row" onClick={scrollHorizontalRight}>
        {">>"}
      </button>
      <div ref={div} className="carousel-imgs">
        {imgs.map((item, index) => {
          return (
            <div className={"img"} key={index}>
              <img src={item} alt="img project" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
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
    if ((project?.id || 0) >= start + 2 && projects.length > start + 3) {
      setStart(start + 1);
    }
    if (start !== 0 && start === (project?.id || 0)) {
      setStart(start - 1);
    }
  };
  const moveRight = () => {
    if (projects.length > start + 3) {
      setStart(start + 1);
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
    if (parseInt(id || "") > start + 2) {
      setStart(parseInt(id || "") - 2);
    }
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
            <ImgsCarousel imgs={project.imgsProject ?? []} />
            <div className="tech-list">
              <h3>technologies use in this project</h3>
              <ul>
                {project?.stackTech?.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="view-project">
              <h3>view project </h3>
              <p>
                <a href={project.projecturl} target={"_blank"} rel="noreferrer">
                  {project.projecturl}
                </a>
              </p>
            </div>
            <div className="view-code">
              <h3>view code </h3>
              <p>
                <a href={project.codeurl} target={"_blank"} rel="noreferrer">
                  {project.codeurl}
                </a>
              </p>
            </div>
            <ProjectController idFocus={project.id} changeProject={changeProject} moveLeft={moveLeft} moveRight={moveRight} start={start} projects={projects} />
          </>
        )}
      </div>
    </div>
  );
}

export default Project;
