import pfp from "../../assets/JacobNordan-3.jpg";

function Header() {
  return (
    <div className="container header">
      <div className="profilePic">
        <img alt="picture of jacob nordan" src={pfp}></img>
      </div>
      <div className="intro">
        <h1>
          Hi, I'm <b>Jacob Nordan</b>. A Fullstack Developer and Creative
          Thinker.
        </h1>
      </div>
    </div>
  )
};

export default Header;
