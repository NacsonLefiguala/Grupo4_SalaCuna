const AsistenteParvulo = require('../models/AsistenteParvulo');

const createAsistenteParvulo = (req, res) => {
    const { NombreCompleto, FechaDeNacimiento, Domicilio,Rut,Telefono, Correo, InformacionRelevante } = req.body;
    const newParvulo = new AsistenteParvulo({
        NombreCompleto,
        FechaDeNacimiento,
        Domicilio,
        Rut,
        Telefono,
        Correo,
        InformacionRelevante,
        // Foto
    });
    newParvulo.save((err, Asistenteparvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el Asistenteparvulo" })
        }
        return res.status(201).send(Asistenteparvulo)
    });
}

const getAsistenteParvulos = (req, res) => {
    Parvulo.find({}, (err, parvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el Asistenteparvulo" })
        }
        return res.status(200).send(AsistenteParvulo)
    });
}

module.exports = {
    createAsistenteParvulo,
    getAsistenteParvulos
}
