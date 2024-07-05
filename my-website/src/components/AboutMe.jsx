import React from "react";
import "../styles/style.css";
import profileImage from "../assets/images/profile.jpg"; // Importing the image

const AboutMe = () => (
  <div className="container">
    <img className="image" src={profileImage} alt="Profile" />
    <div className="content">
      <div className="title">About Me</div>
      <div className="body">
        Hey there! I'm Joana Promise Mhone, a network engineer fascinated by the
        ever-evolving fields of machine learning and AI. I'm also deeply
        committed to cybersecurity and thrive on creating awesome websites and
        mobile apps.
      </div>
    </div>
  </div>
);

export default AboutMe;
