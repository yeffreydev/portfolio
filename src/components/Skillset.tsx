import React, { ReactNode } from "react";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import "./../assets/css/Skillset.css";
const Skill = ({ children, name }: { children: ReactNode; name: string }) => {
  return (
    <div className="item-skill">
      <div className="item-icon">{children}</div>
      <div className="item-name">
        <span>{name}</span>
      </div>
    </div>
  );
};
function Skillset() {
  return (
    <div className="skillset">
      <h1>
        Profesional <span>Skillset</span>
      </h1>
      <div className="skills">
        <Skill name="JavaScript">{<DiJavascript1 />}</Skill>
        <Skill name="Node Js">{<DiNodejs />}</Skill>
        <Skill name="React Js">{<DiReact />}</Skill>
        <Skill name="MongoDB">{<DiMongodb />}</Skill>
        <Skill name="MySQL">{<DiMysql />}</Skill>
        <Skill name="Python">{<DiPython />}</Skill>
        <Skill name="Html 5">{<DiHtml5 />}</Skill>
        <Skill name="Css 3">{<DiCss3 />}</Skill>
        <Skill name="Git">{<DiGit />}</Skill>
      </div>
    </div>
  );
}

export default Skillset;
