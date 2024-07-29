import React from "react";
import SkillIcon from "./SkillIcon";
import javascript from "../../assets/js (1).png";
import Ireact from "../../assets/physics.png";
import html from "../../assets/html-icon.svg";
import tailwincss from "../../assets/tailwind-css-icon.svg";
import bootsrap from "../../assets/bootstrap-5-logo-icon.svg";
import vue from "../../assets/vue-dot-js.svg";
import css from "../../assets/css-icon.svg";
function SkillSec() {
  return (
    <div className="border-2 rounded-md shadow-lg p-6 border-gray-200 w-[30%] ">
      <div className=" my-auto flex items-center h-full">
        <div className="flex flex-wrap gap-6 items-center  justify-center">
          <SkillIcon nameIcon={"javascript"} icon={javascript} widSkill={55} />
          <SkillIcon nameIcon={"react"} icon={Ireact} widSkill={55} />
          <SkillIcon nameIcon={"vue js"} icon={vue} widSkill={55} />
          <SkillIcon nameIcon={"tailwindcss"} icon={tailwincss} widSkill={55} />
          <SkillIcon nameIcon={"bootsrap"} icon={bootsrap} widSkill={55} />
          <SkillIcon nameIcon={"html semantice"} icon={html} widSkill={55} />
          <SkillIcon nameIcon={"css"} icon={css} widSkill={55} />
        </div>
      </div>
    </div>
  );
}

export default SkillSec;
