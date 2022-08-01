import React from "react";
import "./../assets/css/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright © 2022 Yeffrey Espinoza</p>
      <div className="footer-links">
        <a href="" target={"_blank"}>
          <FaGithub />
        </a>
        <a href="" target={"_blank"}>
          <FaInstagram />
        </a>
        <a href="" target={"_blank"}>
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
