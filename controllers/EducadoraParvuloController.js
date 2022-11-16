const EducadoraParvulo = require('../models/EducadoraParvulo');

const createEducadoraParvulo = (req, res) => {
    const { NombreCompleto, Rut, FechaDeNacimiento, Domicilio, Telefono, Correo, Foto, InformacionRelevante} = req.body;
    const newEducadoraParvulo = new EducadoraParvulo({
        NombreCompleto,
        Rut,
        FechaDeNacimiento,
        Domicilio,
        Telefono,
        Correo,
        Foto,
        InformacionRelevante
    });
    newEducadoraParvulo.save((err, educadoraparvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear educadora parvulo", err})
        }
        return res.status(200).send(educadoraparvulo)
    });
}

const getEducadoraParvulos = (req, res) => {
    EducadoraParvulo.find({}, (err, educadoraparvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener educadora parvulo" })
        }
        return res.status(200).send(educadoraparvulo)
    });
}

const getSpecificEducadoraParvulo = (req, res) => {
    EducadoraParvulo.findById(req.params.id, function (err, educadoraparvulo) {
        if (!educadoraparvulo) {
            res.status(404).send("No result found");
        } else {
            res.json(educadoraparvulo);
        }
    });
}

const updateEducadoraParvulo = (req, res) => {
    EducadoraParvulo.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
        res.json("Se actualizo el educadora de parvulo");
    })
    .catch(function (err) {
        res.status(422).send("Error al actualizar educadora de parvulo.");
    });
};

const deleteEducadoraParvulo = (req, res) => {
    const { id } = req.params;
    EducadoraParvulo.findOneAndDelete(id, (err, educadoraparvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener educadora parvulo" })
        }
        if (!educadoraparvulo) {
            return res.status(404).send({ message: "Educadora Parvulo no encontrado" })
        }
        return res.status(200).send( educadoraparvulo)
    });
}

module.exports = {
    createEducadoraParvulo,
    getEducadoraParvulos,
    getSpecificEducadoraParvulo,
    updateEducadoraParvulo,
    deleteEducadoraParvulo
}