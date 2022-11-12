const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ParvuloSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    RUT: {
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
    },
    /*Foto: {
        type:,
        required: true
    },*/
    AsistentesParvulos: {
        type: Schema.ObjectId,
        ref: Asistente - Parvulo
    },
    Apoderados: {
        type: Schema.ObjectId,
        ref: Apoderado
    }
});

module.exports = mongoose.model('parvulo', ParvuloSchema);