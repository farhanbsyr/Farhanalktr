import React from "react";
import "./App.css";
import About from "./component/About";
import HeaderApp from "./component/HeaderApp";
import Hero from "./component/Hero";
import Project from "./component/Project";
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
        <div className="lg:mx-[120px] md:mx-24 sm:mx-20 mx-8">
          <Hero />
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
