const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AsistenteParvuloSchema = new Schema({
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
        required: true
    },
    Telefono: {
        type: Number,
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
    }
});

module.exports = mongoose.model('AsistenteParvulo', AsistenteParvuloSchema);
