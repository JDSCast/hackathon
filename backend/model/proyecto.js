const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    estado: {type: String, enum: ['En progreso', 'finalizado'], default: 'En progreso',  required: true}
});

module.exports = mongoose.model('Proyecto', ProyectoSchema)