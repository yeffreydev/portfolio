import React from "react";
import "./../assets/AboutMe.css";
const AboutMe = () => {
  return (
    <div id="about_me" className="main-content">
      <div className="about_me-head">
        <a href="#projects">Projects</a>
      </div>
      <div className="about_me-body">
        <div className="about_me-img">
          <div id="about_me-profile"></div>
        </div>
        <div className="about_me-content">
          <h3>About me</h3>
          <p>
            Lorem ipsum dolor sit amet
            <br />
            consectetur, adipisicing elit. Quisquam,
            <br></br>
            ipsa quia? Praesentium dignissimos, rem magnam excepturi dolore
            tenetur totam vel, minus facilis reiciendis sit natus nulla quas
            reprehenderit officiis culpa. <br></br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consectetur qui numquam fugiat reprehenderit eaque aspernatur <br />
            deserunt accusantium dolorem vel distinctio id ducimus, quos beatae
            dolore error omnis fuga? Dolorem, cupiditate.
          </p>
        </div>
      </div>
      <div className="about_me-footer">
        <a href="#skills">Go To Skills</a>
      </div>
    </div>
  );
};

export default AboutMe;
