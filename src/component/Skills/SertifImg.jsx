import React from "react";

function SertifikatImage({ sertifImage, sertifName }) {
  return (
    <img
      className="transform duration-500 hover:scale-125"
      width={175}
      height={120}
      src={sertifImage}
      alt={sertifName}
    />
  );
}

export default SertifikatImage;
