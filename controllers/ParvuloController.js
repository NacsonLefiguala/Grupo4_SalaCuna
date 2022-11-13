const { findById } = require('../models/parvulo');
const Parvulo = require('../models/parvulo');

const createParvulo = (req, res) => {
    const { NombreCompleto, RUT, FechaDeNacimiento, Domicilio, InformacionRelevante, /*Foto*/ } = req.body;
    const newParvulo = new Parvulo({
        NombreCompleto,
        RUT,
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

const getSpecificParvulo = (req, res) => {
    const { id } = req.params;
    Parvulo.findById(id, (err, parvulo) => {
        if (err) {
            return req.status(400).send({ message: "Error al obtener el parvulo" })
        }
        if (!parvulo) {
            return res.status(404).send({ message: "Parvulo no encontrado" })
        }
        return re.status(200).send(parvulo)
    });
}

const updateParvulo = (req, res) => {
    const { id } = req.params;
    Parvulo.findByIdAndUpdate(id, req, body, (err, parvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener parvulo" })
        }
        if (!parvulo) {
            return res.status(404).send({ message: "Parvulo no encontrado" })
        }
        return res.status(200).send(parvulo)
    });
}

const deleteParvulo = (req, res) => {
    const { id } = req.params;
    Parvulo.findOneAndDelete(id, (err, parvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el parvulo" })
        }
        if (!parvulo) {
            return res.status(404).send({ message: "Parvulo no encontrado" })
        }
        return res.status(200).send(parvulo)
    });
}

module.exports = {
    createParvulo,
    getParvulos,
    getSpecificParvulo,
    updateParvulo,
    deleteParvulo
}