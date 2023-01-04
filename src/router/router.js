import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Project from "../pages/Project";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};
export default Router;
