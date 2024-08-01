import { useEffect, useState, React } from "react";
import SertifikatImage from "./SertifImg";
import udeFullStack from "../../sertif/Sertifikat Udemy The Complete 2024 Web Development BootCamp.jpg";
import udemy from "../../sertif/Sertifikat Udemy Complete Web dan Mobile Designer-1.png";
import dicodingFE3 from "../../sertif/SertifikatDicodingFrontEnd-3-1.png";
import dicodereact from "../../sertif/SertifikatDicoding_React-1-1.png";
import dicodefe2 from "../../sertif/SertifikatDicoding_FrontEnd-2-1.png";
import uiUx from "../../sertif/Sertiikat Kelas CompleteUIDesigner -Angga-1.png";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Sertifikat() {
  const [isTablet, setIsTablet] = useState(
    window.matchMedia("(max-width:768px)").matches
  );
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.matchMedia("(max-width:768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sertifikatData = [
    { image: udeFullStack, name: "The Complete Website Fullstack" },
    { image: dicodereact, name: "Dicoding React" },
    { image: dicodingFE3, name: "Dicoding FrontEnd Lanjutan" },
    { image: dicodefe2, name: "Dicoding FrontEnd Pemula" },
    { image: udemy, name: "Udemy Complete Build a Website" },
    { image: uiUx, name: "Build With Angga UI/UX" },
  ];
  return (
    <div className="border-2 w-[100%] 2xl:w-[70%]    rounded-md shadow-lg p-6 border-gray-200 ">
      <div className="flex flex-row md:flex-wrap gap-10 h-min 2xl:h-full justify-center ">
        {isTablet ? (
          <Swiper
            centeredSlides={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {sertifikatData.map((sertif, index) => (
              <SwiperSlide className="flex justify-center">
                <SertifikatImage
                  key={index}
                  sertifImage={sertif.image}
                  sertifName={sertif.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          sertifikatData.map((sertif, index) => (
            <SertifikatImage
              key={index}
              sertifImage={sertif.image}
              sertifName={sertif.name}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Sertifikat;
