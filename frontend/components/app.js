import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ActivityForm from "./components/ActivityForm";

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
      const response = await axios.get("http://localhost:4000/api/proyectos");
      setProjects(response.data.Proyectos);
    } catch (error) {
      console.error("Error al obtener proyectos:", error);
    }
  };

  const fetchActivities = async (projectId) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/actividades/${projectId}`);
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
          fetchActivities(project.id);
        }}
      />
      {selectedProject && (
        <>
          <h2>Actividades de: {selectedProject.nombre}</h2>
          <ul>
            {activities.map((activity) => (
              <li key={activity.id}>{activity.nombre}</li>
            ))}
          </ul>
          <ActivityForm
            projectId={selectedProject.id}
            onActivityAdded={() => fetchActivities(selectedProject.id)}
          />
        </>
      )}
    </div>
  );
};

export default App;
