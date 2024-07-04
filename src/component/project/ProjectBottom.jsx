import React from "react";
import ProjectText from "./ProjectText";
import SkillIcon from "../Skills/SkillIcon";
// import Ihtml from "../../assets/html-icon.svg";
// import Ireact from "../../assets/physics.png";
// import Icss from "../../assets/css-icon.svg";
// import Ijs from "../../assets/js (1).png";
// import Itailwind from "../../assets/tailwind-css-icon.svg";

function ProjectBottom({ title, body, skills }) {
  return (
    <div className="flex h-[12.5rem] px-4 flex-col justify-between">
      <ProjectText title={title} body={body} />
      <div className="flex flex-row gap-2 ">
        {skills.map((element, index) => (
          <SkillIcon
            key={index}
            icon={element.icon}
            nameIcon={element.altt}
            widSkill={element.lebar}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectBottom;
