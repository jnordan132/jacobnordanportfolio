import * as React from "react";
import projects from "../../projects.json";

export default function Portfolio() {
  return projects.map(
    (project: {
      image: string;
      name: string;
      github: string;
      live: string;
    }) => (
      <div className="card">
        <img alt={project.name} src={project.image}></img>
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
    )
  );
}
