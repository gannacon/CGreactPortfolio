import React from "react";
import hw1 from "./assets/images/htmlcsshw1.png";
import lsaweb from "./assets/images/lsaweb.png";
import javascript from "./assets/images/javascript.png";
import project2 from "./assets/images/Project2.png";

export default function Blog() {
  return (
    <div>
      <h1 id="whitework">My Work</h1>
      <div className="allproj">
        <div className="projectcard p1">
          <h2> FIRST HOMEWORK</h2>
          <a
            href="https://gannacon.github.io/01_a11y/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={hw1} alt="screen grab of first homework"></img>
          </a>
          <p>
            <h3>
              This was the first homework assignment for our boot camp class and
              utilized the following languages:
            </h3>
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <h4>Please click the screenshot to take you the deployed URL.</h4>
          <br />
          <a
            href="https://github.com/gannacon/01_a11y"
            target="_blank"
            rel="noreferrer"
          >
            Github URL
          </a>
        </div>
        <div className="projectcard p2">
          <h2> FIRST PROJECT</h2>
          <a
            href="https://gannacon.github.io/Project_1/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={lsaweb} alt="lsa website screen grab"></img>
          </a>
          <p>
            <h3>
              This was my first group project for Coding Bootcamp. This was a
              fun project that I worked on with three other students. This was a
              great learning experience.
            </h3>
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <br />
          <h4>Please click the screenshot to take you the deployed URL.</h4>
          <br />
          <a
            href="https://github.com/gannacon/Project_1"
            target="_blank"
            rel="noreferrer"
          >
            Github URL
          </a>
        </div>
        <div className="projectcard p3">
          <h2> HOMEWORK 4 - QUIZ</h2>
          <a
            href="https://gannacon.github.io/Homework_04_Quiz/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={javascript} alt="javascript quiz"></img>
          </a>
          <p>
            <h3>
              This homework was expecially challenging since I had to work with
              a timer and give an output based on the user input. This helped me
              understand JavaScript more and use date.js
            </h3>
          </p>
          <br />
          <h4>Please click the screenshot to take you the deployed URL.</h4>
          <br />
          <a
            href="https://github.com/gannacon/Homework_04_Quiz"
            target="_blank"
            rel="noreferrer"
          >
            Github URL
          </a>
        </div>
        <div className="projectcard p4">
          <h2>PROJECT 2</h2>
          <a
            href="https://abc-myteam.herokuapp.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <img src={project2} alt="Project2"></img>
          </a>
          <p>
            <h3>
              This was a full stack project. We needed to create our own API
              with authentications. We used the following integration: Github,
              Heroku, Visual Studio, Bootstrap, SQL, Sequelize, Express, Node,
              Nodemailer
            </h3>
          </p>
          <br />
          <h4>Please click the screenshot to take you the deployed URL.</h4>
          <br />
          <a
            href="https://github.com/BTDubbzzz/athletics-admin"
            target="_blank"
            rel="noreferrer"
          >
            Github URL
          </a>
        </div>
      </div>
    </div>
  );
}
