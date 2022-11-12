const AsistenteParvulo = require('../models/AsistenteParvulo');

const createAsistenteAsistenteParvulo = (req, res) => {
    const { NombreCompleto, FechaDeNacimiento, Domicilio, InformacionRelevante } = req.body;
    const newAsistenteParvulo = new AsistenteParvulo({
        NombreCompleto,
        FechaDeNacimiento,
        Domicilio,
        Rut,
        Telefono,
        Correo,
        InformacionRelevante,
        // Foto
    });
    newAsistenteParvulo.save((err, AsistenteParvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el Asistente parvulo" })
        }
        return res.status(201).send(AsistenteParvulo)
    });
}

const getAsistenteParvulos = (req, res) => {
    Parvulo.find({}, (err, Asistenteparvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el Asistente parvulo" })
        }
        return res.status(200).send(AsistenteParvulo)
    });
}

module.exports = {
    createAsistenteParvulo,
    getAsistenteParvulos
}