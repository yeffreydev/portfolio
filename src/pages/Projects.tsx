import { useEffect } from "react";
import "./../assets/css/Project.css";
import { useNavigate } from "react-router-dom";
function Projects() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/projects/0");
  }, []);
  return null;
}

export default Projects;
