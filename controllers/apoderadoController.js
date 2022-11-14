const Apoderado = require('../models/Apoderado');

const createApoderado = (req, res) => {
    const { NombreCompleto, RUT, FechaDeNacimiento, Domicilio, Telefono, Correo, Parentezco, Foto, InformacionRelevante } = req.body;
    const newApoderado = new Apoderado({
        NombreCompleto,
        RUT,
        FechaDeNacimiento,
        Domicilio,
        Telefono,
        Correo,
        Parentezco,
        Foto,
        InformacionRelevante
    });
    newApoderado.save((err, Apoderado) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el apoderado", err})
        }
        return res.status(200).send(Apoderado)
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

const deleteApoderado = (req, res) => {
    Apoderado.findByIdAndRemove(req.params.id)
        .then(function () {
            res.status(200).json("Se eliminò el apoderado");
        })
        .catch(function (err) {
            res.status(400).send("Error al eliminar el apoderado.");
        });
};

const updateApoderado = (req, res) => {
    Apoderado.findByIdAndUpdate(req.params.id, req.body)
        .then(function () {
            res.json("Se actualizo el apoderado");
        })
        .catch(function (err) {
            res.status(422).send("Error al actualizar apoderado.");
        });
};

const getApoderado = (req, res) => {
    Apoderado.findById(req.params.id, function (err, Apoderado) {
        if (!Apoderado) {
            res.status(404).send("No result found");
        } else {
            res.json(Apoderado);
        }
    });
};

module.exports = {
    createApoderado,
    getApoderados,
    deleteApoderado,
    updateApoderado,
    getApoderado,
}