const mongoose = require('mongoose');
const AsistenteParvulo = require('./AsistenteParvulo');
const EducadoraParvulo = require('./EducadoraParvulo');
const Parvulo = require('./Parvulo');
const Schema = mongoose.Schema;
const AsistenciaSchema = new Schema ({
    Sala:{
        type:String,
        require: true,
        unique: true
    },
    FechaClase:{
        type: Date,
        required: false,
        default: Date.now()
    },
    Actividad:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Asistencia', AsistenciaSchema);