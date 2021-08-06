import React from "react";
import "../styles/header.css";
import linkedin from "./pages/assets/images/linkedin.png";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <footer>
      <h3>Connor Gannaway 2021 &copy;</h3>
      <br />
      <br />
      <a
        href="https://www.linkedin.com/in/connor-gannaway-9a236a103/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin page" width="20" height="20"></img>
      </a>
    </footer>
  );
}

export default NavTabs;
