import React from "react";

const ProjectList = ({ projects, onSelect }) => {
  return (
    <div>
      <h2>Proyectos</h2>
      <ol>
        {projects.map((project) => (
          <li key={project.id} onClick={() => onSelect(project)}>
            {project.nombre} : {project.descripcion}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProjectList;

