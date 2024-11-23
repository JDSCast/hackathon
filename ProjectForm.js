import React, { useState } from "react";
import axios from "axios";

const ProjectForm = ({ fetchProjects }) => {
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("/api/projects", { name });
        setName("");
        fetchProjects();
    } catch (error) {
        console.error("Error creating project:", error);
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
