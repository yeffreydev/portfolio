import { ProjectI } from "../types";
import { Link } from "react-router-dom";
interface PropsI {
  projects: ProjectI[];
  idFocus: number | string;
  start: number;
  moveRight: () => void;
  moveLeft: () => void;
  changeProject: (project: ProjectI | null) => void;
}
export default function ProjectController(p: PropsI) {
  //functions
  return (
    <div className="controller">
      <button className={p.start < 1 ? "disable" : ""} onClick={p.moveLeft}>
        {"<<"}
      </button>
      {p.projects.slice(p.start, p.start + 3).map((item, index) => {
        return (
          <Link className={p.idFocus === item.id ? "focus" : ""} onClick={() => p.changeProject(item)} to={"/projects/" + item.id} key={index}>
            {item.id}
          </Link>
        );
      })}
      <button className={p.start + 3 >= p.projects.length ? "disable" : ""} onClick={p.moveRight}>
        {">>"}
      </button>
    </div>
  );
}
