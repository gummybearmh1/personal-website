import React from "react";
import projectImage1 from "../Project/first.png"; // Example path, adjust as per your project structure
import projectImage2 from "../Project/second.png"; // Example path, adjust as per your project structure
import "../styles/style.css";

const Project = ({ title, subtitle, projectId }) => {
  let imageUrl;

  // Dynamically set imageUrl based on projectId or use a switch statement for more images
  switch (projectId) {
    case 1:
      imageUrl = projectImage1;
      break;
    case 2:
      imageUrl = projectImage2;
      break;
    // Add more cases as needed
    default:
      imageUrl = projectImage1; // Default image
      break;
  }

  return (
    <div className="project">
      <img className="project-image" src={imageUrl} alt={title} />
      <div className="project-description">
        <div className="project-title">{title}</div>
        <div className="project-subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default Project;
