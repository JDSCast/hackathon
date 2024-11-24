import React, { useState } from "react";
import axios from "axios";
import "./projectForm.css"

const ProjectForm = ({ onProjectAdded }) => {
  const [name, setName] = useState("");
  const [description,setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/proyectos", { nombre: name,descripcion:description });
      setName("");
      onProjectAdded();
    } catch (error) {
      console.error("Error al agregar proyecto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Proyecto</h2>
      <label>Nombre del Proyecto</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del proyecto"
        required
      />
      <label>Descripcion del Proyecto</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripcion del proyecto"
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ProjectForm;
