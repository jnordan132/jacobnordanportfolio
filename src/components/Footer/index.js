import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light"></nav>
        <div class="footerContent">
          <a
            href="https://github.com/jnordan132"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon
              alt="github"
              sx={{ width: 40, height: 40, color: "white" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jacob-nordan/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              alt="linkedin"
              sx={{ width: 40, height: 40, color: "white" }}
            />
          </a>
          <a href="mailto:jacob.nordan113322@gmail.com">
            <AlternateEmailIcon
              alt="gmail"
              sx={{ width: 40, height: 40, color: "white" }}
            />
          </a>
        </div>
        <p>© 2022 Jacob Nordan - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
