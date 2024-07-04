import React from "react";
import "./App.css";
import About from "./component/About";
import HeaderApp from "./component/HeaderApp";
import Hero from "./component/Hero";
import Project from "./component/Project";
import SideApp from "./component/SideApp";
import Skills from "./component/Skills";
import { getAllNotes } from "./utils/local-data";
import Contact from "./component/Contact";
import FooterApp from "./component/Footer";

class App extends React.Component {
  constructor() {
    super(),
      (this.state = {
        project: getAllNotes(),
      });
  }
  render() {
    return (
      <div className="font-Poppins">
        <HeaderApp />
        <div className="mx-[150px]">
          <Hero />
          <SideApp />
          <About />
          <Skills />
          <Project project={this.state.project} />
          <Contact />
        </div>
        <FooterApp />
      </div>
    );
  }
}

export default App;
