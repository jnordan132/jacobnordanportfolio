import FCP from "../../assets/FirstClassPaint.png";
import movieWiki from "../../assets/MovieWikiHome.png";
import ShoeFanatic from "../../assets/ShoeFanatic.webp";
import Feedit from "../../assets/Feedit.webp";
import KB from "../../assets/KBSocialDirectory.webp";
import weather from "../../assets/WeatherDashboard.webp";
import PasswordGen from "../../assets/PasswordGen.webp";
import Note from "../../assets/NoteTaker.webp";
import Employee from "../../assets/employeeTracker.webp";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="container">
        <div className="card">
          <img src={FCP} alt="First Class Painting LLC"></img>
          <h2>
            <strong>First Class Painting LLC</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/FirstClassPaintingLLC"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://firstclasspaintingllc.org/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
        <div className="card">
          <img src={movieWiki} alt="Movie Wiki"></img>
          <h2>
            <strong>MovieWiki</strong>
          </h2>
          <div className="buttons">
            <button className="code">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jnordan132/TMDB-Movie-Search"
              >
                Code
              </a>
            </button>
            <button className="site">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://moviewiki.herokuapp.com/"
              >
                Site
              </a>
            </button>
          </div>
        </div>
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
                href="https://jnordan132.github.io/Kibarake-Social-Site/"
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
