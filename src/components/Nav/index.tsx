import * as React from "react";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <h2>Jacob Nordan</h2>
            <button
              className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              aria-controls="navbarNav"
              data-bs-target="#navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="category"
                    to="about"
                    offset={-100}
                    duration={500}
                  >
                    <a href="about" className="nav-link active">
                      About
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="category"
                    to="skills"
                    offset={-100}
                    duration={500}
                  >
                    <a href="skills" className="nav-link active">
                      Skills
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="category"
                    to="experience"
                    offset={-100}
                    duration={500}
                  >
                    <a href="experience" className="nav-link active">
                      Experience
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="category"
                    to="portfolio"
                    offset={-100}
                    duration={500}
                  >
                    <a href="portfolio" className="nav-link active">
                      Portfolio
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
