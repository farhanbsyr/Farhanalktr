import React from "react";
import HeroText from "./hero/HeroText";
import HeroButton from "./hero/HeroButton";
import HeroProfile from "./hero/HeroProfile";
import HeroSecondButton from "./hero/HeroSecondButton";
import cv from "../assets/CV Farhan.pdf";

function Hero({}) {
  return (
    <section
      id="home"
      className="flex mt-[150px]  items-center justify-between "
    >
      <div className="flex w-[60%] flex-col gap-4 justify-start">
        <HeroText />
        <div className="flex gap-3 items-center justify-items-center">
          <HeroButton words={"Download CV"} linked={cv} />
          <HeroSecondButton words={"Contact Me"} linked={"contact"} />
        </div>
      </div>
      <div className=" w-[40%] text-center ">
        <HeroProfile />
      </div>
    </section>
  );
}

export default Hero;
