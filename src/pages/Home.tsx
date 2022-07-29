import React from "react";
import "./../assets/css/Home.css";
import Type from "../components/Type";
import imageProfile from "./../assets/svg/portfoliohomeprofile.svg";
const Home = () => {
  return (
    <div className="main scroll-y">
      <div className="main-content presentation">
        <div className="presentation-greatting">
          <div>
            Hi There <br />
            I'm <b>Yeffrey Espinoza</b>
            <br />
            <br />
            <span>
              <Type />
            </span>
          </div>
        </div>
        <div className="presentation-profile-img">
          <img src={imageProfile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
