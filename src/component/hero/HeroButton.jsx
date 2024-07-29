import React from "react";

function HeroButton({ words, linked }) {
  return (
    <a
      target="_blank"
      href={linked}
      className={`transform text-sm sm:text-base lg:text-base md:text-sm duration-500 button border-2 w-[145px]  sm:w-[167px] font-semibold active:scale-105 bg-gray-900 text-white py-[18px]  text-center  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950`}
    >
      <button></button>
      {words}
    </a>
  );
}

export default HeroButton;
