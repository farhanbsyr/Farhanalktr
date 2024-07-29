import React from "react";
import { Link } from "react-scroll";

function HeroSecondButton({ words, linked }) {
  return (
    <Link
      target="_self"
      smooth={true}
      offset={-100}
      duration={1200}
      to={linked}
      className={`button text-sm sm:text-base lg:text-base md:text-sm transition-transform transform duration-500 cursor-pointer w-[145px] sm:w-[167px]  border-black border-2 font-bold  active:scale-105 bg-white text-black py-[18px]  text-center  rounded-full outline-none focus:scale-110 hover:scale-110 `}
    >
      <button></button>
      {words}
    </Link>
  );
}

export default HeroSecondButton;
