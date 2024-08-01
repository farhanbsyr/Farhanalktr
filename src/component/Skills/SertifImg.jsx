import { React } from "react";

import { useMediaQuery } from "react-responsive";
function SertifikatImage({ sertifImage, sertifName }) {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1235px)" });

  // Contoh penggunaan isLaptop, jika diperlukan
  const imageWidth = isTablet ? "100%" : isLaptop ? 175 : 200;

  return (
    <img
      className="transform duration-500 md:hover:scale-125"
      width={imageWidth}
      height={isTablet ? 120 : 120}
      src={sertifImage}
      alt={sertifName}
    />
  );
}

export default SertifikatImage;
