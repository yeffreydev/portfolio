import ProjectItem from "../components/ProjectItem";
import { ProjectI } from "../types";
import projects from "../data/projects";
import "./../assets/css/Projects.css";

const ProjectsList = ({ projects }: { projects: ProjectI[] }) => {
  return (
    <div className="projects-list">
      {projects.map((item, index) => {
        return <ProjectItem key={index} project={item} />;
      })}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="content-container">
      <div className="projects content-width">
        <h1 className="projects-title">Projects</h1>
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
