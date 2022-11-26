const mongoose = require('mongoose');
const AsistenteParvulo = require('./AsistenteParvulo');
const EducadoraParvulo = require('./EducadoraParvulo');
const Parvulo = require('./Parvulo');
const Schema = mongoose.Schema;
const AsistenciaSchema = new Schema ({
    Sala:{
        type:String,
        require: true
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
    EducadoraParvulo:{
        EducadoraParvulo:{
            type: Schema.ObjectId,
            ref: EducadoraParvulo
        }
    },
    AsistenteParvulos:{
        AsistenteParvulos:{
            type: [Schema.ObjectId],
            ref: AsistenteParvulo
        }
    },
    Parvulos:{
        type:[Schema.ObjectId],
        ref: Parvulo
    }
});

module.exports = mongoose.model('Asistencia', AsistenciaSchema);