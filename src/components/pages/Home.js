import React from "react";
import portrait from "./assets/images/portrait.jpg";

export default function Home() {
  return (
    <div id="about-me">
      <div class="column1">
        <h1>About Me</h1>
        <br />
        <p>
          Hello! My name is Connor Gannaway. I'm an engineer, photographer, and
          web designer from Kansas city Kansas. Please browse my portfolio below
          and feel free to contact me if you are interested in my services.
        </p>
      </div>
      <div class="column2">
        <img src={portrait} alt="Portrait of Connor"></img>
      </div>
    </div>
  );
}
