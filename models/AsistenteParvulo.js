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
        required: true,
        unique: true,
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
        Type: ["user"]
    }
});

module.exports = mongoose.model('AsistenteParvulo', AsistenteParvuloSchema);
