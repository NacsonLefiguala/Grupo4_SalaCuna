const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AsistenteParvuloSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    FechaDeNacimiento: {
        type: date,
        required: true
    },
    Domicilio: {
        type: String,
        require: true
    },
    Rut:{
        type: number,
        required: true
    },
    Telefono: {
        type: number,
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

module.exports = mongoose.model('AsistenteParvulo', AsistenteParvuloSchema);