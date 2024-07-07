import React from "react";
import "../styles/style.css";
import keyboardImg from "../assets/images/keyboard.jpg";

const Contact = () => (
  <div className="cont">
    <img className="images" src={keyboardImg} alt="Keyboard" />
    <div className="form-container">
      <div className="title title3">Contact</div>
      <div className="header-subtitle2">
        I welcome any inquiries and collaborations. Please feel free to reach
        out with any questions or project proposals.
      </div>
      {/* <form action="">
        <div className="form-group">
          <div className="label">First name</div>
          <input
            type="text"
            id="first"
            placeholder="Enter first name"
            name="firstName"
            className="input"
          />
        </div>
        <div className="form-group">
          <div className="label">Last name</div>
          <input
            type="text"
            id="last"
            placeholder="Enter last name"
            name="lastName"
            className="input"
          />
        </div>
        <div className="form-group">
          <div className="label">Email</div>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            name="email"
            className="input"
          />
        </div>
        <div className="form-group">
          <div className="label">Message</div>
          <textarea
            id="message"
            placeholder="Enter your message"
            name="message"
            className="input textarea"
          ></textarea>
        </div>
        <button type="submit" className="submit" id="submission">
          Submit
        </button>
      </form> */}
      <div className="contact-info">
        <p>
          <strong>Phone:</strong> +265 992 85 26 12
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:joanamhone@gmail.com">joanamhone@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/joana-mhone-46a03b1b6">
            Joana Mhone
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/bsc-com-ne-11-19">Student</a>
          <br />
          <a href="https://github.com/gummybearmh1">Personal </a>
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
