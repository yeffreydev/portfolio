import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} index />
      </Routes>
    </div>
  );
};
export default Router;
