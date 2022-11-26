const mongoose = require('mongoose');
const AsistenteParvulo = require('./AsistenteParvulo')
const Apoderado = require('./Apoderado')
const Schema = mongoose.Schema;
const ParvuloSchema = new Schema({
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
    InformacionRelevante: {
        type: String,
        required: true
    },
    Foto: {
        type: String,
        required: true
    },
    Role:{
        Type: ["user"]
    }

});


module.exports = mongoose.model('Parvulo', ParvuloSchema);