import React from "react";
import ProjectText from "./ProjectText";
// import Ihtml from "../../assets/html-icon.svg";
// import Ireact from "../../assets/physics.png";
// import Icss from "../../assets/css-icon.svg";
// import Ijs from "../../assets/js (1).png";
// import Itailwind from "../../assets/tailwind-css-icon.svg";

function ProjectBottom({ title, body, skills, detailBD }) {
  return (
    <div className="flex h-full px-4 flex-col justify-between">
      <ProjectText title={title} body={body} detailBD={detailBD} />
    </div>
  );
}

export default ProjectBottom;
