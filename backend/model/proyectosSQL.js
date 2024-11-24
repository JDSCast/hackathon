const {pool} = require('../config/basesDatos');

const tableProyectosQuery = `
CREATE TABLE IF NOT EXISTS proyectos (
    id SERIAL PRIMARY KEY,
    mongo_id VARCHAR(255) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL
);`;

const createTableProyectos = async () => {
    try {
      const client = await pool.connect();
      await client.query(tableProyectosQuery);
      console.log('Tabla Proyectos creada o ya existe');
      client.release();
    } catch (err) {
      console.error('Error al crear la tabla proyectos:', err);
    }
  };
  
  module.exports = createTableProyectos;
  