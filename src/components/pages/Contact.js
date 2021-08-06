import React, { useState } from "react";
import resume from "./assets/Resume.pdf";

import { validateEmail } from "../../utils/helpers";

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, firstName, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setfirstName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the firstName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !firstName) {
      setErrorMessage("Email or name is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    alert(`Hello ${firstName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setfirstName("");
    setEmail("");
  };

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
        <br />
        <div>
          <form className="form">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              name="message"
              onChange={handleInputChange}
              type="message"
              placeholder="message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
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
