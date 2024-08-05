import React from "react";
import ProjectBottom from "./ProjectBottom";
import { useMediaQuery } from "react-responsive";
import { FaGithub } from "react-icons/fa";
import preview from "../../assets/preview-svgrepo-com.svg";

import SkillIcon from "../Skills/SkillIcon";

function ProjectCard({
  images,
  title,
  body,
  skills,
  linked,
  github,
  detailBD,
}) {
  const isNoteBook = useMediaQuery({ query: "(max-width: 1100px)" });
  const isNoteBook2 = useMediaQuery({ query: "(min-width: 970px)" });

  const imageWidth = isNoteBook ? "lg:w-[20rem]" : "lg:w-[23.8rem]";

  return (
    <div
      className={`px-4 card transform duration-700 hover:scale-110 pt-4 pb-6 flex shadow-lg border-2 border-gray-100 mb-5 sm:w-[23rem] md:w-[28rem]  ${imageWidth}  2xl:w-[28rem] flex-col gap-2 justify-between rounded-md`}
    >
      <div className="flex flex-col gap-2">
        <div className=" relative overflow-hidden rounded-md bg-cover h-[12.5rem] ">
          <img
            className="object-cover rounded-md object-top w-full h-full z-[1] hover:bg-black"
            src={images}
            alt={title}
          />
          <div className="absolute inset-0  bg-black opacity-0 transition-opacity duration-500 hover:opacity-85">
            <div className="flex h-full w-full gap-10 justify-center items-center">
              <a
                target="_blank"
                href={github}
                className="opacity-100   gap-1 flex items-center justify-center py-2 px-4 hover:bg-blue-500 rounded-md border-gray-100 border"
              >
                <FaGithub
                  width={35}
                  height={35}
                  className=" w-[20px] h-[20px] text-white"
                />
                <p className="text-white text-[10px]">Source Code</p>
              </a>
              <a
                target="_blank"
                href={linked}
                className="opacity-100 w-32 gap-1 flex items-center justify-center py-2 px-4 hover:bg-blue-500 rounded-md border-gray-100 border"
              >
                <img
                  src={preview}
                  alt="icon preview"
                  className="text-blue-500"
                  width={20}
                />
                <p className="text-white text-[10px]">Preview</p>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <ProjectBottom
            title={title}
            body={body}
            skills={skills}
            detailBD={detailBD}
          />
        </div>
      </div>
      <div className="flex px-4 flex-row gap-2 align-bottom  ">
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
export default ProjectCard;
