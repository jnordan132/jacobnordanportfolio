import * as React from "react";

export default function About() {
  return (
    <div className="container aboutSkills">
      <div className="container about">
        <h1>About Me</h1>
        <div className="aboutMe">
          <p>
            My name is Jacob Nordan and I'm from Wilmington, NC. I'm a Full
            Stack Web Developer with a primary focus on the MERN tech stack. I
            completed the University of North Carolina at Chapel Hills Full
            Stack Coding Bootcamp. I have had the opportunity to develop
            applications ranging from E-commerce platforms and social media
            platforms to information management tools such as employee tracking
            systems.
          </p>
        </div>
      </div>
      <div className="container skills">
        <h1>My Skills</h1>
        <div className="listFlex">
          <ul className="list">
            <li>
              <img
                alt="html svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
              <img
                alt="css svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
              <img
                alt="javascript svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                alt="bootstrap svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <img
                alt="materialui svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              />
            </li>
          </ul>
          <ul className="list">
            <li>
              <img
                alt="mongodb svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              />
              <img
                alt="express svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              />
              <img
                alt="react svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
              <img
                alt="node svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <img
                alt="mysql svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              />
            </li>
          </ul>
          <ul className="list">
            <li>
              <img
                alt="redux svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
              <img
                alt="jquery svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
              />
              <img
                alt="heroku svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
              />
              <img
                alt="git svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
              <img
                alt="npm svg"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
