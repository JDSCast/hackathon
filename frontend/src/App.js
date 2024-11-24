import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "./components/projectForm";
import ProjectList from "./components/projectList";
import ActivityForm from "./components/activityForm";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activities, setActivities] = useState([]);

  // Cargar proyectos al inicio
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5000/proyectos");
      setProjects(response.data.Proyectos);
    } catch (error) {
      console.error("Error al obtener proyectos:", error);
    }
  };

  const fetchActivities = async (proyectoId) => {
    try {
      const response = await axios.get(`http://localhost:5000/${proyectoId}`);
      setActivities(response.data.actividad);
    } catch (error) {
      console.error("Error al obtener actividades:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Proyectos</h1>
      <ProjectForm onProjectAdded={fetchProjects} />
      <ProjectList
        projects={projects}
        onSelect={(project) => {
          setSelectedProject(project);
          fetchActivities(project._id);
        }}
      />
      {selectedProject && (
        <>
        <ActivityForm
            projectId={selectedProject._id}
            onActivityAdded={() => fetchActivities(selectedProject._id)}
          />
          <h2>Actividades de: {selectedProject.nombre}</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Responsable</th>
                <th>Fecha</th>
                </tr>
                </thead>
                <tbody>
                  {activities.map((activity) => (
                    <tr key={activity.id}>
                      <td>{activity.nombre}</td>
                      <td>{activity.responsable}</td>
                      <td>{new Date(activity.fecha_entrega).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
          </table>
          
        </>
      )}
    </div>
  );
};

export default App;
