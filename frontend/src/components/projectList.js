import React from "react";

const ProjectList = ({ projects, onSelect }) => {
  return (
    <div>
      <h2>Proyectos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id} onClick={() => onSelect(project)} style={{ cursor: "pointer" }}>
              <td>{project.nombre}</td>
              <td>{project.descripcion}</td>
              <td>{project.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;