import * as React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light"></nav>
        <div className="footerContent">
          <a
            href="https://github.com/jnordan132"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon sx={{ width: 40, height: 40, color: "black" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-nordan/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon sx={{ width: 40, height: 40, color: "black" }} />
          </a>
          <a href="mailto:jacob.nordan113322@gmail.com">
            <AlternateEmailIcon
              sx={{ width: 40, height: 40, color: "black" }}
            />
          </a>
        </div>
        <p>© 2022 Jacob Nordan | All rights reserved.</p>
      </div>
    </div>
  );
}
