const Proyecto = require('../modelos/proyecto');

exports.crearProyecto = async(req, res) => {
    try{
        const nuevoProyecto = new Proyecto(req.body)
        await nuevoProyecto.save()
    } catch(error) {
        res.status(500).json({mensaje: 'Error al crear el proyecto: ', error: error.message})
    }
}

exports.obtenerProyectos = async (req, res) => {
    const { proyectoId } = req.params
    try {
        const proyecto = await Proyecto.findOne({ proyectoId: proyectoId}).populate('proyectos.proyecto');
        if(!proyecto) {
            return res.status(404).json({mensaje: 'Proyecto no encontrado'})
        }
        res.status(200).json(proyecto);
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