import { Link } from "react-router-dom";
import { ProjectI } from "../types";
import "./../assets/css/components/ProjectItem.css";
function ProjectItem({ project }: { project: ProjectI }) {
  return (
    <div className="project-item">
      <div className="img"></div>
      <div>
      	<a href={project.codeurl ?? ''}>https://projectname.com</a>
      </div>
      <div className="content">
        <h4 className="title">{project.title}</h4>
        <p className="description">{project.description}
<a target='_blank' href={project.codeurl ?? ''}>view code</a>
	</p>
        <div className="links">
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
