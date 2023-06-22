import * as React from "react";
import pfp from "../../assets/JacobNordan-3.webp";
import resume from "../../assets/Resume.pdf";

export default function Header() {
  return (
    <div className="container header">
      <div className="profilePic">
        <img alt="jacob nordan" src={pfp}></img>
      </div>
      <div className="intro">
        <h1>
          Hi, I'm{" "}
          <React.Fragment>
            <b>Jacob Nordan</b>
          </React.Fragment>
          . A Fullstack Developer and Creative Thinker.
        </h1>
        <a target="_blank" rel="noopener noreferrer" href={resume}>
          <button className="resume">
            <React.Fragment>
              <b>My Resume</b>
            </React.Fragment>
          </button>
        </a>
      </div>
    </div>
  );
}
