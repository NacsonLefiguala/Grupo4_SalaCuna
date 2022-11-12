const mongoose = require('mongoose');
const ApoderadoSchema = mongoose.Schema;
const ApoderadoSchema = new Schema({
    NombreApoderado: {
        type: String,
        required: true
    }
    RutApoderado: {
        type: String,
        required: true
    }
    FechaNacimientoApoderado: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('apoderado', ApoderadoSchema);models/apoderado.js