import React from "react";
import HeroText from "./hero/HeroText";
import HeroButton from "./hero/HeroButton";
import HeroProfile from "./hero/HeroProfile";
import HeroSecondButton from "./hero/HeroSecondButton";
import cv1 from "../assets/CV Farhan.pdf";
import SideApp from "./SideApp";

function Hero({}) {
  return (
    <section
      id="home"
      className="flex gap-8 md:gap-3 lg:gap-0 mt-[150px] md:flex-row flex-col-reverse  items-center justify-between "
    >
      <div className="flex lg:w-[60%] md:w-[50%] flex-col gap-4 ">
        <HeroText />
        <div className="coba flex flex-col gap-3">
          <div className="flex gap-3 items-center justify-center md:justify-start">
            <HeroButton words={"Download CV"} linked={cv1} />
            <HeroSecondButton words={"Contact Me"} linked={"contact"} />
          </div>
          <SideApp />
        </div>
      </div>
      <div className="lg:w-[40%] md:w-[50%] w-[65%] text-center ">
        <HeroProfile />
      </div>
    </section>
  );
}

export default Hero;
