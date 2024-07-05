import React from "react";
import Project from "./Project";
import "../styles/style.css";

const Projects = () => (
  <div>
    <div className="projects-container">
      <Project
        title="Soil Analysis and Crop Recommendation System"
        subtitle="An IoT and machine learning system (Website) that helps farmers optimize crop selection to maximize land potential"
        projectId={1}
      />
      <Project
        title="Hostel booking Application"
        subtitle="A user friendly UI/UX design for a hostel booking mobile application"
        projectId={2}
      />
      {/* Add more Project components as needed */}
    </div>
  </div>
);

export default Projects;
