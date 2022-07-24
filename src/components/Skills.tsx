import React from "react";
import "./../assets/Skills.css";

const SkillItem = ({ nameSkill }: { nameSkill: string }) => {
  return (
    <div className="skill-item">
      <span>{nameSkill}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="main-content">
      <div className="skills-head">
        <h3>Skills</h3>
      </div>
      <div className="skills-contain">
        <div className="container-skills-1">
          <SkillItem nameSkill="Nodejs" />
          <SkillItem nameSkill="JavaScript" />
          <SkillItem nameSkill="Express" />
        </div>
        <div className="container-skills-2">
          <SkillItem nameSkill="React " />
          <SkillItem nameSkill="MySql" />
          <SkillItem nameSkill="MongodDb" />
        </div>
        <div className="container-skills-3">
          <SkillItem nameSkill="Git" />
          <SkillItem nameSkill="PHP" />
          <SkillItem nameSkill="Laravel" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
