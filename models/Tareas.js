const mongoose = require('mongoose');

const TareasSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    completed : Boolean,
}, { timestamps: true });

const Tarea = mongoose.model('Tarea', TareasSchema);

module.exports = Tarea;