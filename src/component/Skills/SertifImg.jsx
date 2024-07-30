import { useEffect, useState, React } from "react";
function SertifikatImage({ sertifImage, sertifName }) {
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
    <img
      className="transform duration-500 hover:scale-125"
      width={isTablet ? 200 : 175}
      height={isTablet ? 120 : 120}
      src={sertifImage}
      alt={sertifName}
    />
  );
}

export default SertifikatImage;
