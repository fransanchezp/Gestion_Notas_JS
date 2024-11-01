const mongoose = require('mongoose');

const NotaSchema = new mongoose.Schema({
    tipo: { type: String, enum: ['normal', 'critica'], required: true },
    contenido: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Nota', NotaSchema);
