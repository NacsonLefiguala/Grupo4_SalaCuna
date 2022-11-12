const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ApoderadoSchema = new Schema({
    NombreCompleto: {
        type: String,
        required: true
    },
    FechaDeNacimiento: {
        type: String,
        required: true
    },
    //lllllll
});

module.exports = mongoose.model('Apoderado', ApoderadoSchema);