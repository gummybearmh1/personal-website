import React from "react";
import { ReactTyped } from "react-typed"; // Correct named import
import "../styles/style.css";
import profileImage from "../assets/images/profile.jpg"; // Importing the image

const AboutMe = () => (
  <div className="container">
    <img className="image" src={profileImage} alt="Profile" />
    <div className="content">
      <div className="title">About Me</div>
      <div className="body">
        Hey there! I'm Joana Promise Mhone,
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
  </div>
);

export default AboutMe;
