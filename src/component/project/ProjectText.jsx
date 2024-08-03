import React, { useEffect, useState } from "react";

function ProjectText({ title, body }) {
  const [bodyLength, setBodyLength] = useState(false);
  const handleSign = () => {
    if (body.length > 160) {
      setBodyLength(true);
    }
  };
  const maxLength = 160;

  // Check if the body length exceeds the maximum length
  const shouldTruncate = body.length > maxLength;

  // Truncate the body text and add ellipsis if needed
  const displayText = shouldTruncate
    ? `${body.substring(0, maxLength)} ...`
    : body;

  console.log(body.length);
  return (
    <div className="projecttext py-2">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-[16px] inline">
        {body.substring(0, maxLength)}
      </p>
      <a href="" className="tracking-wider text-[24px] text-blue-600">
        {` ${body.length > maxLength ? "..." : ""}`}
      </a>
    </div>
  );
}

export default ProjectText;
