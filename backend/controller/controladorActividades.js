const { pool } = require('../config/basesDatos');

exports.agregarActividad = async (req, res) =>{
    const {proyectoId: mongoId} = req.params

    try {
        const { nombre, responsable, fecha_entrega } = req.body;
        const proyectoIdPostgres = await pool.query(
            'SELECT id FROM proyectos WHERE mongo_id = $1;',
            [mongoId]
        )
        console.log(proyectoIdPostgres)
        const nuevaActividad = await pool.query(
            'INSERT INTO actividades (proyecto_id, nombre, responsable, fecha_entrega) VALUES ($1, $2, $3, $4) RETURNING *',
            [parseInt(proyectoIdPostgres.rows[0].id), nombre, responsable, fecha_entrega]
        )

        return res.status(201).json({ mensaje: 'Actividad agregada exitosamente', actividad: nuevaActividad.rows[0]  }); 

        } catch (error) {
        return res.status(500).json({ mensaje: 'Error al crear la actividad', error: error.message });
    }
}

exports.traerActividades = async (req, res) =>{
    const {proyectoId} = req.params

    try {
        const actividades = await pool.query(
            'SELECT * FROM actividades WHERE proyecto_id = (SELECT id FROM proyectos WHERE mongo_id = $1);',
            [proyectoId]
        )
        
        return res.status(201).json({ mensaje: 'Actividades obtenidas exitosamente', cantidad: actividades.rowCount, actividad: actividades.rows }); 

        } catch (error) {
        return res.status(500).json({ mensaje: 'Error al traer las actividades', error: error.message });
    }
}