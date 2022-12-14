const mongoose = require('mongoose');
const Apoderado = require('./Apoderado');
const AsistenteParvulo = require('./AsistenteParvulo');
const Parvulo = require('./Parvulo');
const Schema = mongoose.Schema;
const EducadoraParvuloSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    FechaDeNacimiento: {
        type: Date,
        required: true,
    },
    Domicilio: {
        type: String,
        require: true
    },
    Rut: {
        type: String,
        required: true,
        unique: true
    },
    Telefono: {
        type: Number,
        required: true,
        unique: true
    },
    Correo: {
        type: String,
        required: true,
        unique: true
    },
    InformacionRelevante: {
        type: String,
        required: true
    },
    Foto: {
        type: String,
        required: true,
        unique: true
    },
    Role: {
        Type: ["admin"]
    }
});

module.exports = mongoose.model('EducadoraParvulo', EducadoraParvuloSchema);