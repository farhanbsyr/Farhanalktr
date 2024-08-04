import React from "react";

function HeroText() {
  return (
    <div className="h-description lg:mr-10">
      <h4 className="sm:text-center md:text-left md:text-base lg:text-xl sm:text-xl text-base">
        Hello, I'm{" "}
        <span className="font-semibold md:text-xl lg:text-2xl sm:text-2xl text-xl">
          {" "}
          Farhan,
        </span>{" "}
        <br />
        I'm a fresh graduate who is studying the field of website development,
        especially the{" "}
        <span className="font-semibold md:text-xl lg:text-2xl sm:text-2xl text-xl">
          Frontend Developer
        </span>{" "}
      </h4>
    </div>
  );
}

export default HeroText;
