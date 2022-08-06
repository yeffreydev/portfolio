import React from "react";
import "./../assets/css/AboutFirst.css";
import { ImPointRight } from "react-icons/im";
function AboutFirst() {
  return (
    <div className="about-first">
      <div className="about-first-right">
        <span>
          Know Who <b>I'M</b>
        </span>
        <p>
          Hi Everyone, I am{" "}
          <span className="about-first-right-highlight">Yeffrey Espinoza </span>
          from <span className="about-first-right-highlight">Perú</span>
        </p>
        <p>I am a Junior Web Developer</p>
        <br />
        <br />
        <p>Apart from coding, some other activities that I live to do</p>
        <ul className="activities-list">
          <li>
            <ImPointRight />
            Playing Games
          </li>
          <li>
            <ImPointRight />
            Read Books
          </li>
          <li>
            <ImPointRight />
            Study
          </li>
        </ul>
        <div>
          <p className="quote">"Knowledge is power ..."</p>
          <p className="quote-autor">- Francis Bacon</p>
        </div>
      </div>
      <div className="about-first-left">
        <div className="img"></div>
      </div>
    </div>
  );
}

export default AboutFirst;
