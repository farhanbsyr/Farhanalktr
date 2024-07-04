import SideIcon from "./SideIcon";
import instagram from "../assets/black-instagram-icon.svg";
import github from "../assets/github-icon.svg";
import linkedin from "../assets/linkedin-square-icon.svg";
function SideApp() {
  return (
    <div className=" fixed top-1/2 left-10 transform -translate-y-1/2">
      {" "}
      <div className="flex flex-col gap-4">
        <a target="_blank" href="https://www.instagram.com/farhanbsyr/">
          <SideIcon icons={instagram} />
        </a>
        <a target="_blank" href="https://github.com/farhanbsyr">
          <SideIcon icons={github} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/farhanalktr/">
          <SideIcon icons={linkedin} />
        </a>
      </div>
    </div>
  );
}

export default SideApp;
