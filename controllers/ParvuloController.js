const parvulo = require('../models/parvulo');
const Parvulo = require('../models/parvulo');

const createParvulo = (req, res) => {
    const { NombreCompleto, FechaDeNacimiento, Domicilio, InformacionRelevante } = req.body;
    const newParvulo = new Parvulo({
        NombreCompleto,
        FechaDeNacimiento,
        Domicilio,
        InformacionRelevante,
        // Foto
    });
    newParvulo.save((err, parvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el parvulo" })
        }
        return res.status(201).send(parvulo)
    });
}

const getParvulos = (req, res) => {
    Parvulo.find({}, (err, parvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el parvulo" })
        }
        return res.status(200).send(parvulo)
    });
}

module.exports = {
    createParvulo,
    getParvulos
}