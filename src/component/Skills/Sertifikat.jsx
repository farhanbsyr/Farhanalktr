import React from "react";
import SertifikatImage from "./SertifImg";
import udeFullStack from "../../sertif/Sertifikat Udemy The Complete 2024 Web Development BootCamp.jpg";
import udemy from "../../sertif/Sertifikat Udemy Complete Web dan Mobile Designer-1.png";
import dicodingFE3 from "../../sertif/SertifikatDicodingFrontEnd-3-1.png";
import dicodereact from "../../sertif/SertifikatDicoding_React-1-1.png";
import dicodefe2 from "../../sertif/SertifikatDicoding_FrontEnd-2-1.png";
import uiUx from "../../sertif/Sertiikat Kelas CompleteUIDesigner -Angga-1.png";

function Sertifikat() {
  return (
    <div className="border-2 w-[100%] 2xl:w-[70%]    rounded-md shadow-lg p-6 border-gray-200 ">
      <div className="flex flex-row flex-wrap gap-6 h-min 2xl:h-full justify-center ">
        <SertifikatImage
          sertifImage={udeFullStack}
          sertifName={"The Complete Website Fullstack"}
        />
        <SertifikatImage
          sertifImage={dicodereact}
          sertifName={"Dicoding React"}
        />
        <SertifikatImage
          sertifImage={dicodingFE3}
          sertifName={"Dicoding FrontEnd Lanjutan"}
        />
        <SertifikatImage
          sertifImage={dicodefe2}
          sertifName={"Dicoding FrontEnd Pemula"}
        />
        <SertifikatImage
          sertifImage={udemy}
          sertifName={"Udemy Complete Build a Website"}
        />
        <SertifikatImage
          sertifImage={uiUx}
          sertifName={"Build With Angga UI/UX"}
        />
      </div>
    </div>
  );
}

export default Sertifikat;
