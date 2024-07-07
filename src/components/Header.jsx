import React from "react";
import "../styles/style.css";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a
          href="#about-me"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior of anchor tag
            scrollToSection("about-me");
          }}
        >
          About Me
        </a>
        <a
          href="#projects"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior of anchor tag
            scrollToSection("projects");
          }}
        >
          Projects
        </a>
        <a
          href="#certificates"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior of anchor tag
            scrollToSection("certificates");
          }}
        >
          Certificates
        </a>
        <a
          href="#contact"
          className="nav-link"
          onClick={(e) => {
            e.preventDefault(); // Prevent default behavior of anchor tag
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
