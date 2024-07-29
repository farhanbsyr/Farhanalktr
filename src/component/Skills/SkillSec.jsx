import React from "react";
import SkillIcon from "./SkillIcon";
import javascript from "../../assets/js (1).png";
import Ireact from "../../assets/physics.png";
import html from "../../assets/html-icon.svg";
import tailwincss from "../../assets/tailwind-css-icon.svg";
import bootsrap from "../../assets/bootstrap-5-logo-icon.svg";
import vue from "../../assets/vue-dot-js.svg";
function SkillSec() {
  return (
    <div className="border-2 rounded-md shadow-lg p-6 border-gray-200 w-[30%]">
      <div className="flex flex-wrap gap-6 items-center h-full justify-center">
        <SkillIcon nameIcon={"javascript"} icon={javascript} widSkill={60} />
        <SkillIcon nameIcon={"react"} icon={Ireact} widSkill={60} />
        <SkillIcon nameIcon={"tailwindcss"} icon={tailwincss} widSkill={60} />
        <SkillIcon nameIcon={"bootsrap"} icon={bootsrap} widSkill={60} />
        <SkillIcon nameIcon={"html"} icon={html} widSkill={60} />
        <SkillIcon nameIcon={"vue js"} icon={vue} widSkill={60} />
      </div>
    </div>
  );
}

export default SkillSec;
