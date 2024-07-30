import { useEffect, useState, React } from "react";

import SkillIcon from "./SkillIcon";
import javascript from "../../assets/js (1).png";
import Ireact from "../../assets/physics.png";
import html from "../../assets/html-icon.svg";
import tailwincss from "../../assets/tailwind-css-icon.svg";
import bootsrap from "../../assets/bootstrap-5-logo-icon.svg";
import vue from "../../assets/vue-dot-js.svg";
import css from "../../assets/css-icon.svg";
function SkillSec() {
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width:1235px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.matchMedia("(max-width:1235px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-2 rounded-md shadow-lg  p-6 border-gray-200 w-[100%] 2xl:w-[30%] ">
      <div className=" my-auto flex justify-center items-center h-[360px] 2xl:h-full ">
        <div className="flex flex-wrap gap-6 items-center  justify-center md:w-3/4 lg:w-1/2 2xl:w-full">
          <SkillIcon
            nameIcon={"javascript"}
            icon={javascript}
            widSkill={isTablet ? 75 : 55}
          />
          <SkillIcon
            nameIcon={"react"}
            icon={Ireact}
            widSkill={isTablet ? 75 : 55}
          />
          <SkillIcon
            nameIcon={"vue js"}
            icon={vue}
            widSkill={isTablet ? 75 : 55}
          />
          <SkillIcon
            nameIcon={"tailwindcss"}
            icon={tailwincss}
            widSkill={isTablet ? 75 : 55}
          />
          <SkillIcon
            nameIcon={"bootsrap"}
            icon={bootsrap}
            widSkill={isTablet ? 75 : 55}
          />
          <SkillIcon
            nameIcon={"html semantice"}
            icon={html}
            widSkill={isTablet ? 75 : 55}
          />
          <SkillIcon
            nameIcon={"css"}
            icon={css}
            widSkill={isTablet ? 75 : 55}
          />
        </div>
      </div>
    </div>
  );
}

export default SkillSec;
