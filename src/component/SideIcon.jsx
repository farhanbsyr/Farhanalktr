import { useEffect, useState } from "react";

function SideIcon({ icons }) {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width:767px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width:767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <img
      className=" transform duration-500 hover:scale-125"
      width={isMobile ? 30 : 40}
      height={60}
      src={icons}
      alt={icons}
    />
  );
}

export default SideIcon;
