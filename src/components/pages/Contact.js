import React from "react";
import resume from "./assets/Resume.pdf";

export default function Contact() {
  return (
    <div>
      <div id="contact-me">
        <h1>Contact Me</h1>
        <br />
        <a
          href="https://www.linkedin.com/in/connor-gannaway-9a236a103/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <br />
        <a href="https://github.com/gannacon" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <br />
        <br />
        <h1>Resume</h1>
        <iframe
          frameborder="0"
          src={resume}
          title="resume"
          width="75%"
          height="1000"
        ></iframe>
      </div>
    </div>
  );
}
