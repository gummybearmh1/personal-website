import React from "react";
import { ReactTyped } from "react-typed";
import "../styles/style.css"; // Ensure this path is correct
import profileImage from "../assets/images/profile.jpg";

const AboutMe = ({ id }) => (
  <section id={id} className="container">
    <div className="content">
      <div className="text-content">
        <div className="title">About Me</div>
        <div className="body">
          Hey there! I'm Joana Promise Mhone,
          <br />
          <ReactTyped
            strings={[
              " a network engineer fascinated by the ever-evolving fields of machine learning and AI.",
              " I am deeply committed to cybersecurity.",
              " I thrive on creating awesome websites and mobile apps.",
            ]}
            typeSpeed={100}
            backSpeed={30}
            loop
          />
        </div>
      </div>
      <img className="image" src={profileImage} alt="Profile" />
    </div>
  </section>
);

export default AboutMe;
