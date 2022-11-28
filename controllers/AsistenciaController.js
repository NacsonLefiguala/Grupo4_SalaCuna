const Asistencia = require('../models/Asistencia');

const createAsistencia = (req, res) =>{
    const body = MatchedData(req)
    const {Sala, FechaClase, Actividad} = req.body;
    const newAsistencia = new Asistencia({
        Sala,
        FechaClase,
        Actividad
    });
    Asistencia.create(body)
    newAsistencia.save((err, asistencia) =>{
        if(err){
            return res.status(400).send({message: "Error al crear la asistencia" ,err})
        }
        return res.status(200).send(asistencia)
    });
}

const getAsistencias = (req, res) => {
    Asistencia.find({}, (err, Asistencia) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener asistencia" })
        }
        return res.status(200).send(Asistencia)
    });
}

const getSpecificAsistencia = (req, res) => {
    Asistencia.findById(req.params.id, function (err, Asistencia) {
        if (!Asistencia) {
            res.status(404).send("No result found");
        } else {
            res.json(Asistencia);
        }
    });
}

const updateAsistencia = (req, res) => {
    Asistencia.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
        res.json("Se actualizo la asistencia");
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
    getAsistencias,
    getSpecificAsistencia,
    updateAsistencia,
    deleteAsistencia
}