import React, { useState } from "react";
import "../styles/style.css";

// Importing images
import coursera1 from "../certs/coursera.jpg";
import coursera2 from "../certs/coursera2.jpg";
import coursera3 from "../certs/coursera3.jpg";
import coursera4 from "../certs/coursera4.jpg";
import cisco from "../certs/cisco.jpg";
import kaya from "../certs/kaya.jpg";
import telstra from "../certs/telstra.jpg";
import She from "../certs/SheCodes.png";

const Certificates = ({ id }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const dropdownData = [
    {
      title: "Microsoft CyberSecurity Analyst Specialization",
      certificates: [
        {
          name: "CyberSecurity Identity and Access Solutions using Azure AD",
          image: coursera1,
          link: "https://coursera.org/verify/BC5ZSP49RV8D",
        },
        {
          name: "Cybersecurity Threat Vectors and Mitigation",
          image: coursera2,
          link: "https://coursera.org/verify/6RA9W4SEPK7T",
        },
        {
          name: "Introduction to Networking and Cloud Computing",
          image: coursera3,
          link: "https://coursera.org/verify/TFVD5U33KFJX",
        },
        {
          name: "Introduction to Computers and Operating Systems and Security",
          image: coursera4,
          link: "https://coursera.org/verify/TFVD5U33KFJX",
        },
      ],
    },
    {
      title: "Cisco Junior CyberSecurity Analyst",
      certificates: [
        {
          name: "Introduction to Cybersecurity",
          image: cisco,
          link: "https://www.credly.com/badges/6a62c3d2-ac8b-4d67-a9a5-af51f5e16972/public_url",
        },
      ],
    },
    {
      title: "Project Management",
      certificates: [
        {
          name: "Project Management Certificate",
          image: kaya,
          link: "https://example.com/project",
        },
      ],
    },
    {
      title: "CyberSecurity Analyst job Sim",
      certificates: [
        {
          name: "Telstra Certificate",
          image: telstra,
          link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Telstra%20AU/RNhbu8QnDzthwynEf_Telstra_ib4KjuN2vp4dHwT5J_1706642750379_completion_certificate.pdf",
        },
      ],
    },
    {
      title: "SheCodes FrontEnd Development",
      certificates: [
        {
          name: "SheCodes Basics",
          image: She,
          link: "https://www.shecodes.io/certificates/2f4564e7fd506b57759157a896ac114f?_gl=1*i8u7e9*_gcl_au*MTk4NDIwNjY4NS4xNzE5NzY4NjI4",
        },
      ],
    },
  ];

  return (
    <section id={id} className="certificates">
      <div className="portfolio-title">Certificates</div>
      <div className="subheading">
        Browse through my professional achievements
      </div>
      <div className="body-text">
        {dropdownData.map((dropdown, index) => (
          <div className="dropdown" key={index}>
            <h2
              className="dropdown-toggle"
              onClick={() => toggleDropdown(index)}
            >
              {dropdown.title}
              <span className="material-symbols-outlined">arrow_drop_down</span>
            </h2>
            {activeDropdown === index && (
              <div className="dropdown-content">
                {dropdown.certificates.map((certificate, certIndex) => (
                  <a
                    key={certIndex}
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    <div className="certificate-item">
                      <img src={certificate.image} alt={certificate.name} />
                      <div className="certificate-text">
                        <p>{certificate.name}</p>
                        <p className="certificate-link-text">
                          {certificate.link}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
