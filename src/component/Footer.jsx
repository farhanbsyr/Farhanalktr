import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function FooterApp() {
  return (
    <div id="footer" className="mt-[75px] lg:mx-[120px] py-8 bg-black">
      <div className="flex flex-row gap-4 md:gap-0 max-md:flex-wrap text-white justify-around md:justify-between mx-8 sm:mx-12 md:mx-[100px]">
        <div className="font-semibold text-2xl  max-md:min-w-full  md:text-2xl md:text-left text-center">
          <h1>FarhanAlktr</h1>
        </div>
        <div id="footer-contact">
          <h2 className="mb-2 font-semibold text-lg md:text-2xl">Contact Me</h2>
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-2 text-sm  md:text-base max-w-full">
              <SiGmail width={50} />
              <a href="" className="break-words">
                farhanalktr91@gmail.com
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-sm  md:text-base">
              <FaInstagram />
              <a
                className=" inline-block"
                href="https://www.instagram.com/farhanbsyr/"
              >
                farhanbsyr
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-sm  md:text-base">
              <FaGithubSquare />
              <a href="https://github.com/farhanbsyr">farhanalktr</a>
            </li>
            <li className="inline-flex items-center gap-2 text-sm  md:text-base">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/farhanalktr/">farhanalktr</a>
            </li>
          </ul>
        </div>
        <div id="footer-navigation">
          <h2 className="mb-2 font-semibold text-lg md:text-2xl">Navigation</h2>
          <ul>
            <li>
              <a href="#" target="_self" className="text-sm md:text-base">
                Home
              </a>
            </li>
            <li>
              <a href="#about" target="_self" className="text-sm md:text-base">
                About
              </a>
            </li>
            <li>
              <a href="#skills" target="_self" className="text-sm md:text-base">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#project"
                target="_self"
                className="text-sm md:text-base"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#contact"
                target="_self"
                className="text-sm md:text-base"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterApp;
