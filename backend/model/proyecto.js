const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
    proyectoId: {type: String, required: true},
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    estado: {type: String, enum: ['En progreso', 'finalizado'], default: 'pendiente'}
});

module.exports = mongoose.model('Proyecto', ProyectoSchema)