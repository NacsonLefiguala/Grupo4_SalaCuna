const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParvuloSchema = new Schema({
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
    InformacionRelevante: {
        type: String,
        required: true
    }
    /*Foto: {
        type:,
        required: true
    }*/
});

module.exports = mongoose.model('parvulo', ParvuloSchema);