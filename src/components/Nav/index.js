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
                  <Link class="category" to="about" offset={-50}>
                    <a href="about" class="nav-link active">
                      About
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="category" to="skills" offset={-50}>
                    <a href="skills" class="nav-link active">
                      Skills
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="category" to="portfolio" offset={-50}>
                    <a href="portfolio" class="nav-link active">
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="category" to="experience" offset={-50}>
                    <a href="experience" class="nav-link active">
                      Experience
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

export default Nav;
