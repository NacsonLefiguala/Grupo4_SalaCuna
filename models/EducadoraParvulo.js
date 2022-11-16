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
        required: false,
        default: Date.now()
    },
    Domicilio: {
        type: String,
        require: true
    },
    Rut: {
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
    InformacionRelevante: {
        type: String,
        required: true
    },
    Foto: {
        type: String,
        required: true
    },
    AsistenteParvulo: {
        type: Schema.ObjectId,
        ref: AsistenteParvulo
    },
    Apoderado: {
        type: Schema.ObjectId,
        ref: Apoderado
    },
    Parvulo: {
        type: Schema.ObjectId,
        ref: Parvulo
    }
});

module.exports = mongoose.model('EducadoraParvulo', EducadoraParvuloSchema);