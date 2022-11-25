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

const getAsistencia = (req, res) => {
    Asistencia.find({}, (err, Asistencia) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener asistencia" })
        }
        return res.status(200).send(Asistencia)
    });
}

const getSpecificAsistencia = (req, res) => {
    EducadoraAsistencia.findById(req.params.id, function (err, Asistencia) {
        if (!Asistencia) {
            res.status(404).send("No result found");
        } else {
            res.json(asistencia);
        }
    });
}

const updateAsistencia = (req, res) => {
    Asistencia.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
        res.json("Se actualizo la asistencia del parvulo");
    })
    .catch(function (err) {
        res.status(422).send("Error al actualizar la asistencia");
    });
};

const deleteAsistencia = (req, res) => {
    const { id } = req.params;
    Asistencia.findOneAndDelete(id, (err, asistencia) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener la asistencia" })
        }
        if (!asistencia) {
            return res.status(404).send({ message: "Asistencia no encontrada" })
        }
        return res.status(200).send( asistencia)
    });
}

module.exports = {
    createAsistencia,
    getAsistencia,
    getSpecificAsistencia,
    updateAsistencia,
    deleteAsistencia
}