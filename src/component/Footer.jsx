import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function FooterApp() {
  return (
    <div id="footer" className="mt-[75px] py-8 bg-black">
      <div className="flex flex-row text-white justify-between mx-[100px]">
        <div className="font-semibold text-2xl">
          <h1>FarhanAlktr</h1>
        </div>
        <div>
          <h2 className="mb-5 font-semibold text-2xl">Contact Me</h2>
          <ul className="flex flex-col gap-1">
            <li className="inline-flex items-center gap-2">
              <SiGmail width={50} />
              farhanalktr91@gmail.com
            </li>
            <li className="inline-flex items-center gap-2">
              <FaInstagram />
              <p className=" inline-block">farhanbsyr</p>
            </li>
            <li className="inline-flex items-center gap-2">
              <FaGithubSquare />
              farhanalktr
            </li>
            <li className="inline-flex items-center gap-2">
              <FaLinkedin />
              farhanalktr
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-5 font-semibold text-2xl">Section</h2>
          <ul>
            <li>
              <a href="#" target="_self">
                Home
              </a>
            </li>
            <li>
              <a href="#about" target="_self">
                About
              </a>
            </li>
            <li>
              <a href="#skills" target="_self">
                Skills
              </a>
            </li>
            <li>
              <a href="#project" target="_self">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" target="_self">
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
