import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="nav">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <h4>Jacob Nordan</h4>
            <button
              class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="about" spy={true}>
                      About
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="skills" spy={true}>
                      Skills
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="experience" spy={true}>
                      Experience
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active">
                    <Link to="portfolio" spy={true}>
                      Portfolio
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
