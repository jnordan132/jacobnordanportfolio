import projects from "../../projects.json";

function Portfolio() {
  return projects.map((project) => (
    <div className="card">
      <img src={project.image} alt={project.name}></img>
      <h2>
        <strong>{project.name}</strong>
      </h2>
      <div className="buttons">
        <button className="code">
          <a target="_blank" rel="noopener noreferrer" href={project.github}>
            Repo
          </a>
        </button>
        {project.live ? (
          <button className="site">
            <a target="_blank" rel="noopener noreferrer" href={project.live}>
              Live
            </a>
          </button>
        ) : null}
      </div>
    </div>
  ));
}

export default Portfolio;
