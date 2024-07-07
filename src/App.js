import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Title from "./components/Title";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe id="about-me" />
      <Title />
      <Projects id="projects" />
      <Certificates id="certificates" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
