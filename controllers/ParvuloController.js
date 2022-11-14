const { findById } = require('../models/Parvulo');
const Parvulo = require('../models/Parvulo');

const createParvulo = (req, res) => {
    const { NombreCompleto, RUT, FechaDeNacimiento, Domicilio, InformacionRelevante, Foto} = req.body;
    const newParvulo = new Parvulo({
        NombreCompleto,
        RUT,
        FechaDeNacimiento,
        Domicilio,
        InformacionRelevante,
        Foto
    });
    newParvulo.save((err, Parvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el parvulo", err})
        }
        return res.status(200).send(Parvulo)
    });
}

const getParvulos = (req, res) => {
    Parvulo.find({}, (err, Parvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el parvulo" })
        }
        return res.status(200).send(Parvulo)
    });
}

const deleteParvulo = (req, res) => {
    Parvulo.findByIdAndRemove(req.params.id)
        .then(function () {
            res.status(200).json("Se eliminò el parvulo");
        })
        .catch(function (err) {
            res.status(400).send("Error al eliminar el parvulo.");
        });
};

const updateParvulo = (req, res) => {
    Parvulo.findByIdAndUpdate(req.params.id, req.body)
    .then(function (){
        res.json("Se actualizo el parvulo");
    })
    .catch(function (err){
        res.status(422).send("Error añ actualizar parvulo");
    });
};

const getParvulo = (req, res) => {
    Parvulo.findById(req.params.id, function (err, Parvulo) {
        if (!Parvulo) {
            res.status(404).send("No result found");
        } else {
            res.json(Parvulo);
        }
    });
};

module.exports = {
    createParvulo,
    getParvulos,
    getParvulo,
    updateParvulo,
    deleteParvulo
}