import React, { useState } from "react";
import axios from "axios";

const ProjectForm = ({ onProjectAdded }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/proyectos", { nombre: name });
      setName("");
      onProjectAdded();
    } catch (error) {
      console.error("Error al agregar proyecto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Proyecto</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del proyecto"
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProjectForm;
