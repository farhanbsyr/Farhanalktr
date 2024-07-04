import React from "react";

function ProjectText({ title, body }) {
  return (
    <div className="projecttext py-2">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-[16px]">{body}</p>
    </div>
  );
}

export default ProjectText;
