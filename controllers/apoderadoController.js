const Apoderado = require('../models/apoderado');
const Apoderado = require('../models/apoderado');

const createApoderado = (req, res) => {
    const { NombreApoderado, RutApoderado, FechaNacimientoApoderado} = req.body;
    const newApoderado = newApoderado({
        NombreApoderado,
        RutApoderado,
        FechaNacimientoApoderado
    });
    newApoderado.save((err, apoderado) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el apoderado" })
        }
        return res.status(201).send(apoderado)
    });
}

const getApoderado = (req, res) => {
    Apoderado.find({}, (err, apoderado) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el apoderado" })
        }
        return res.status(200).send(apoderado)
    });
}

module.exports = {
    createApoderado,
    getApoderado
}
