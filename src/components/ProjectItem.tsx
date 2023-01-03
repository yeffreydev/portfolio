import { Link } from "react-router-dom";
import { ProjectI } from "../types";
import "./../assets/css/components/ProjectItem.css";
function ProjectItem({ project }: { project: ProjectI }) {
  return (
    <div className="project-item">
      <div className="img"></div>
      <div className="content">
        <h4 className="title">{project.title}</h4>
        <p className="description">{project.description}</p>
        <div className="links">
          <a target={"_blank"} href={project.codeurl ?? ""}>
            code
          </a>
          <Link to={"/projects/" + project.id}>view</Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
