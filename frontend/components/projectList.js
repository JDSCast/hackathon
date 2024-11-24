import React from "react";

const ProjectList = ({ projects, onSelect }) => {
  return (
    <div>
      <h2>Proyectos</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelect(project)}>
            {project.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

