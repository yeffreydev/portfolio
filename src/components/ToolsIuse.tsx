import React, { ReactNode } from "react";
import "./../assets/css/ToolsIUse.css";
import {
  SiFigma,
  SiGooglesheets,
  SiHeroku,
  SiLinux,
  SiNetlify,
  SiPlatzi,
  SiVisualstudiocode,
} from "react-icons/si";
const Tool = ({ children, name }: { children: ReactNode; name: string }) => {
  return (
    <div className="tool-item">
      <div className="tool-icon">{children}</div>
      <div className="tool-name">{name}</div>
    </div>
  );
};
function ToolsIuse() {
  return (
    <div className="tools-i-use">
      <h1>
        <span>Tools </span>I use
      </h1>
      <div className="tools">
        <Tool name="VS Code">
          <SiVisualstudiocode />
        </Tool>
        <Tool name="Linux">
          <SiLinux />
        </Tool>
        <Tool name="Figma">
          <SiFigma />
        </Tool>
        <Tool name="Heroku">
          <SiHeroku />
        </Tool>
        <Tool name="Netlify">
          <SiNetlify />
        </Tool>
        <Tool name="Platzi">
          <SiPlatzi />
        </Tool>
        <Tool name="Google Sheets">
          <SiGooglesheets />
        </Tool>
      </div>
    </div>
  );
}

export default ToolsIuse;
