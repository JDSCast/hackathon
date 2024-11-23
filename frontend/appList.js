import {useState} from 'react';
import data from './components/data';

const AppList = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const handleProjectClick = (project) => {
        setSelectedProject(project);
      };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Lista de Proyectos</h1>
          <div style={{ display: "flex", gap: "20px" }}>
            {/* Lista de proyectos */}
            <div style={{ width: "30%" }}>
              <h2>Proyectos</h2>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {data.map((project) => (
                  <li
                    key={project.id}
                    onClick={() => handleProjectClick(project)}
                    style={{
                      padding: "10px",
                      margin: "5px 0",
                      cursor: "pointer",
                      background: selectedProject?.id === project.id ? "#ddd" : "#f9f9f9",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  >
                    {project.name}
                  </li>
                ))}
              </ul>
            </div>
    
            {/* Detalles del proyecto seleccionado */}
            <div style={{ width: "70%" }}>
              <h2>Actividades</h2>
              {selectedProject ? (
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {selectedProject.activities.map((activity, index) => (
                    <li
                      key={index}
                      style={{
                        padding: "10px",
                        margin: "5px 0",
                        background: "#f0f0f0",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                      }}
                    >
                      {activity}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Selecciona un proyecto para ver sus actividades.</p>
              )}
            </div>
          </div>
        </div>
      );
};

export default AppList;