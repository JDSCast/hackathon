import React, { useState } from "react";
import axios from "axios";

const ActivityForm = ({ projectId, onActivityAdded }) => {
  const [name, setName] = useState("");
  const [responsable, setResponsable] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4000/api/actividades/${projectId}`, {
        nombre: name,
        responsable,
        fecha_entrega: fechaEntrega,
      });
      setName("");
      setResponsable("");
      setFechaEntrega("");
      onActivityAdded();
    } catch (error) {
      console.error("Error al agregar actividad:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Actividad</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre de la actividad"
        required
      />
      <input
        type="text"
        value={responsable}
        onChange={(e) => setResponsable(e.target.value)}
        placeholder="Responsable"
        required
      />
      <input
        type="date"
        value={fechaEntrega}
        onChange={(e) => setFechaEntrega(e.target.value)}
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default ActivityForm;

