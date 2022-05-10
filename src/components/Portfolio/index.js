import ShoeFanatic from "../../assets/ShoeFanatic.webp";
import KB from "../../assets/KBSocialDirectory.webp";
import PasswordGen from "../../assets/PasswordGen.webp";
import Feedit from "../../assets/FEEDIT.webp";
import weather from "../../assets/WeatherDashboard.webp";
import quiz from "../../assets/CodeQuiz.webp";
import Note from "../../assets/NoteTaker.webp";
import Fitness from "../../assets/FitnessTracker.webp";
import Employee from "../../assets/EmployeeTracker.webp";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="container">
        <div className="card">
          <img src={ShoeFanatic} alt="Shoe Fanatic"></img>
          <h2>
            <strong>Shoe Fanatic</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/Shoe-Fanatic"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://limitless-bastion-50224.herokuapp.com/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={KB} alt="Kibarake Social Media Directory"></img>
          <h2>
            <strong>Social Media Directory</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/Kibarake-Social-Site"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://kibarake.herokuapp.com/"
              >
                Site
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img src={PasswordGen} alt="Employee Tracker"></img>
          <h2>
            <strong>Password Generator</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/Password-Generator"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jnordan132.github.io/Password-Generator/"
              >
                Site
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img src={Feedit} alt="Feedit"></img>
          <h2>
            <strong>FEEDIT</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/FEEDIT"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jnordan132.github.io/FEEDIT/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={weather} alt="Weather Dashboard"></img>
          <h2>
            <strong>Weather Dashboard</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/City-Weather-Dashboard"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jnordan132.github.io/City-Weather-Dashboard/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={quiz} alt="Javascript Quiz"></img>
          <h2>
            <strong>JavaScript Quiz</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/Javascript-Fundamentals-Quiz"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://jnordan132.github.io/Javascript-Fundamentals-Quiz/"
              >
                Site
              </a>
            </button>
          </div>
        </div>

        <div className="card">
          <img src={Note} alt="Weather Dashboard"></img>
          <h2>
            <strong>Note Taker</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/Note-Taker"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://note-taker-jacobnordan.herokuapp.com/notes"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={Fitness} alt="fitness tracker"></img>
          <h2>
            <strong>Fitness Tracker</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/Fitness-Tracker"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://warm-wildwood-42692.herokuapp.com/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={Employee} alt="Employee Tracker"></img>
          <h2>
            <strong>Employee Tracker</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/Employee-Tracker"
              >
                Code
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
