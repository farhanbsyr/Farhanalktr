import { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

function HeaderApp() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    if (windowWidth >= 768) {
      setIsMenuToggled(true);
    } else {
      setIsMenuToggled(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  useEffect(() => {
    setActiveLink("home");
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(id);
        } else if (window.scrollY === 0 || window.scrollY < 300) {
          setActiveLink("home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className=" z-50 fixed top-0 font-sans bg-white  w-[100%] shadow-md">
      <div className="container-header py-5 mx-8 sm:mx-14 md:mx-20 lg:mx-28 items-center flex flex-row justify-between">
        <div className="logo-app text-[1.75rem] font-semibold">FarhanAlktr</div>

        <button
          onClick={() => setIsMenuToggled(!isMenuToggled)}
          className=" md:hidden flex items-center z-50 text-2xl"
        >
          {isMenuToggled ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`md:static text-white absolute w-[75%] sm:w-[60%] top-0 right-0 bg-gray-200 bg-opacity-40 md:bg-white  z-10 transition-transform duration-300 ease-in-out md:p-0 py-12 justify-center md:justify-end items-center md:items-end px-10  flex flex-col md:flex-row gap-7  sm:gap-10 md:gap-4 md:text-xl text-xl sm:text-3xl ${
            isMenuToggled
              ? " h-[100vh] md:h-[100%] md:backdrop-blur-none backdrop-blur-lg  transform translate-x-0  "
              : "  transform translate-x-full"
          }`}
        >
          <li>
            <Link
              to="home"
              onClick={scrollToTop}
              smooth={true}
              offset={-100}
              duration={1200}
              className={` cursor-pointer ${
                activeLink === "home"
                  ? "text-gray-950 font-semibold dark:text-white"
                  : " text-gray-400"
              }`}
              target="_self"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              offset={-100}
              duration={1200}
              className={`cursor-pointer ${
                activeLink === "about"
                  ? "text-gray-950 font-semibold dark:text-white"
                  : " text-gray-400"
              }`}
              target="_self"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              offset={-100}
              duration={1200}
              className={` cursor-pointer ${
                activeLink === "skills"
                  ? "text-gray-950 font-semibold dark:text-white"
                  : " text-gray-400"
              }`}
              target="_self"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              offset={-100}
              duration={1200}
              className={` cursor-pointer ${
                activeLink === "project"
                  ? "text-gray-950 font-semibold dark:text-white"
                  : " text-gray-400"
              }`}
              target="_self"
            >
              Project
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-100}
              duration={1200}
              className={`cursor-pointer ${
                activeLink === "contact"
                  ? "text-gray-950 font-semibold dark:text-white"
                  : " text-gray-400"
              }`}
              target="_self"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderApp;
