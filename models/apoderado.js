const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ApoderadoSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    RUT: {
        type: String,
        required: true,
        unique: true
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
        type: Number,
        required: true,
    },
    Correo: {
        type: String,
        required: true,
        unique: true
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
    },
    Role:{
        Type: ["admin"],
    }
});

module.exports = mongoose.model('Apoderado', ApoderadoSchema);