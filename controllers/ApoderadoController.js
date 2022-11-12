const Apoderado = require('../models/apoderado');
const Apoderado = require('../models/apoderado');

const createApoderado = (req, res) => {
    const { NombreCompleto, FechaDeNacimiento, InformacionRelevante } = req.body;
    const newApoderado = new Apoderado({
        NombreCompleto,
        FechaDeNacimiento,
        InformacionRelevante,
    });
    newApoderado.save((err, apoderado) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el Apoderado" })
        }
        return res.status(201).send(apoderado)
    });
}

const getApoderados = (req, res) => {
    Apoderado.find({}, (err, apoderado) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el apoderado" })
        }
        return res.status(200).send(apoderado)
    });
}

module.exports = {
    createApoderado,
    getApoderados
}