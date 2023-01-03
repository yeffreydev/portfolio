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
    <div>
      <h3 style={{ color: "#fff" }}>{project?.title}</h3>
    </div>
  );
}

export default Project;
