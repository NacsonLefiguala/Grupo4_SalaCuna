const Asistencia = require('../models/Asistencia');

const createAsistencia = (req, res) =>{
    const {Sala, FechaClase, Actividad} = req.body;
    const newAsistencia = new Asistencia({
        Sala,
        FechaClase,
        Actividad
    });
    newAsistencia.save((err, asistencia) =>{
        if(err){
            return res.status(400).send({message: "Error al crear la asistencia" ,err})
        }
        return res.status(200).send(asistencia)
    });
}