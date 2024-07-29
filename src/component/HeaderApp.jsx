import { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

function HeaderApp() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
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

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className=" z-50 fixed top-0 font-sans bg-white w-[100%] shadow-md">
      <div className="container-header py-5 mx-28 items-center flex flex-row justify-between">
        <div className="logo-app text-[1.75rem] font-[600]">FarhanAlktr</div>
        <ul className="flex flex-row gap-4 text-xl">
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
