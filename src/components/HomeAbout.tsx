import React from "react";
import "./../assets/css/HomeAbout.css";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import imageProfile from "./../assets/svg/p.svg";
function HomeAbout() {
  return (
    <div className="main-container">
      <div className="home-about">
        <div className="home-about-header">
          <h1>
            Let Me <span>Intruduce</span> Myselft
          </h1>
        </div>
        <div className="home-about-section">
          <div className="home-about-section-body">
            <p>
              Knowledge and programming make a nice couple continous learning,
              with no end.
            </p>
            <p>
              I am Fluent in Classeics like{" "}
              <span className="relevant">C++, JavaScript, and python.</span>
            </p>
            <p>
              My field of interest's are building new{" "}
              <span className="relevant">Web Technologies and Products</span>{" "}
              and also in areas related to{" "}
              <span className="relevant">
                Web development as well with Mobile apps development
              </span>
            </p>
            <p>
              Whenever possible, I also apply my passion for developming
              products with <span className="relevant">Node.js</span> and{" "}
              <span className="relevant">
                Modern JavaScript Library and Frameworks{" "}
              </span>
              like{" "}
              <span className="relevant">React.js, Web3.js and Next.js</span>
            </p>
          </div>
          <div className="home-about-section-avatar">
            <img src={imageProfile} />
          </div>
        </div>
        <div className="home-about-footer">
          <h2>FIND ME ON</h2>
          <p>Feel free to connect with me</p>
          <div className="links">
            <a href="https://github.com/yeffreycode" target={"_blank"}>
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/yeffrey404" target={"_blank"}>
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yeffrey-espinoza-074227246/"
              target={"_blank"}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
