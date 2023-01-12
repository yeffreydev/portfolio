import { useEffect } from "react";
import "./../assets/css/Project.css";
import { useNavigate } from "react-router-dom";
function Projects() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/projects/0");
    //eslint-disable-next-line
  }, []);
  return null;
}

export default Projects;
