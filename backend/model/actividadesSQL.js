const {pool} = require('../config/basesDatos');

const tableActividadesQuery = `
CREATE TABLE IF NOT EXISTS actividades (
    id SERIAL PRIMARY KEY,
    proyecto_id INT NOT NULL REFERENCES proyectos(id),
    nombre VARCHAR(255) NOT NULL,
    responsable VARCHAR(255) NOT NULL,
    fecha_entrega DATE NOT NULL
);`;

const createTableActividades = async () => {
    try {
      const client = await pool.connect();
      await client.query(tableActividadesQuery);
      console.log('Tabla Actividades creada o ya existe');
      client.release();
    } catch (err) {
      console.error('Error al crear la tabla Actividades:', err);
    }
  };
  
  module.exports = createTableActividades;