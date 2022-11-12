const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AsistenteParvuloSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    FechaDeNacimiento: {
        type: String,
        required: true
    },
    Domicilio: {
        type: String,
        require: true
    },
    Rut:{
        type: String,
        required: true
    },
    Correo:{
        type: String,
        required: true
    },
    InformacionRelevante: {
        type: String,
        required: true 
    }
    /*Foto: {
        type:,
        required: true EEEE
    }*/
});

module.exports = mongoose.model('parvulo', ParvuloSchema);