const Apoderado = require('../models/apoderado');

const createApoderado = (req, res) => {
    const { NombreCompleto, RUT, FechaDeNacimiento, Domicilio, Telefono, Correo, Parentezco, /*Foto,*/ InformacionRelevante } = req.body;
    const newApoderado = newApoderado({
        NombreCompleto,
        RUT,
        FechaDeNacimiento,
        Domicilio,
        Telefono,
        Correo,
        Parentezco,
        //   Foto,
        InformacionRelevante
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