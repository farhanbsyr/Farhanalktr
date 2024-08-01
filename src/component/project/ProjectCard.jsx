import React from "react";
import ProjectBottom from "./ProjectBottom";
import { useMediaQuery } from "react-responsive";
function ProjectCard({ images, title, body, skills, linked }) {
  const isNoteBook = useMediaQuery({ query: "(max-width: 1160px)" });

  const imageWidth = isNoteBook ? "w-[30rem]" : "w-[30rem]";

  return (
    <a
      target="_blank"
      href={linked}
      className="px-4 transform duration-700 hover:scale-110 pt-4 pb-6 flex shadow-lg border-2 border-gray-100 mb-5 sm:w-80 lg:w-[24rem]  2xl:w-[28rem] flex-col gap-2 rounded-md min-h-[5px] h-max"
    >
      <div className=" bg-cover h-[12.5rem]">
        <img
          className="object-cover rounded-md object-top w-full h-full"
          src={images}
          alt={title}
        />
      </div>
      <ProjectBottom title={title} body={body} skills={skills} />
    </a>
  );
}
export default ProjectCard;
