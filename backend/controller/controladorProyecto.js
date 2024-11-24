const { pool } = require('../config/basesDatos');
const Proyecto = require('../model/proyecto');

exports.crearProyecto = async(req, res) => {
    
    try{
        //Crear registro en Mongo
        const nuevoProyecto = new Proyecto(req.body)
        await nuevoProyecto.save()

        //Traer nuevo registro de mongo
        //console.log(nuevoProyecto._id)

        //Crear registro en  Postgres
        const nuevoProyectoSQL =  await pool.query(
            'INSERT INTO proyectos (mongo_id, nombre) VALUES ($1, $2) RETURNING *',
            [nuevoProyecto._id.toString(), nuevoProyecto.nombre]
        );

        res.status(201).json({mensaje: 'Proyecto creado exitosamente', Proyecto_Mongo: nuevoProyecto, Proyecto_SQL: nuevoProyectoSQL.rows[0]});
    } catch(error) {
        res.status(400).json({mensaje: 'Error al crear el proyecto: ', error: error.message})
    }
}

exports.obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find();
        res.status(200).json({mensaje: 'Proyectos obtenidos exitosamente', cantidad: proyectos.length, Proyectos: proyectos});

    } catch(error) {
        res.status(400).json({mensaje: 'Error al obtener el carrito', erro: error.message})
    }
}

exports.obtenerProyectosSQL = async (req, res) => {
    try {
        const proyectos = await pool.query(
            'SELECT * FROM proyectos');
        res.status(200).json({mensaje: 'Proyectos de obtenidos exitosamente', cantidad: proyectos.rowCount, Proyectos: proyectos.rows});

    } catch(error) {
        res.status(500).json({mensaje: 'Error al obtener el carrito', erro: error.message})
    }
}
exports.actualizarProyectos = async (req, res) => {
    const { proyectoId } = req.body
    try {
        const proyectoActualizado = await Proyecto.findOneAndUpdate(
            { proyectoId: proyectoId },
            { new: true }
        );
        if(!proyectoActualizado) {
            return res.status(404).json({mensaje: 'Proyecto no encontrado'})
        }
        res.status(200).json({mensaje: 'Proyecto actualizado', proyecto: proyectoActualizado});
    } catch(error) {
        res.status(500).json({mensaje: 'Error al actualizar el proyecto', error: error.message});
    }
};

exports.eliminarProyecto = async (req, res) => {
    const { proyectoId } = req.params
    try {
        const proyectoEliminado = await Proyecto.findOneAndUpdate(
            { proyectoId: proyectoId},
            { new: true}
        )

        if(!proyectoEliminado) {
            return res.status(404).json({ mensaje: 'Proyecto no encontrado'})
        }
        res.status(200).json({mensaje: 'Proyecto eliminado correctamente'});
    } catch(error) {
        res.status(500).json({mensaje: 'Error al eliminar el proyecto', error: error.message});
    }
}