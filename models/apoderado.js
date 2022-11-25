const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ApoderadoSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    RUT: {
        type: String,
        required: true
    },
    FechaDeNacimiento: {
        type: Date,
        required: true,
    },
    Domicilio: {
        type: String,
        required: true
    },
    Telefono: {
        type: String,
        required: true
    },
    Correo: {
        type: String,
        required: true
    },
    Parentezco: {
        type: String,
        required: true
    },
    Foto: {
        type: String,
        required: true
    },
    InformacionRelevante: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Apoderado', ApoderadoSchema);