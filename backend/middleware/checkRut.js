const EducadoraParvulo = require('../models/EducadoraParvulo')

const chechRut = (req, res, next) => {
    EducadoraParvulo.findOne({ rut: req.body.Rut }, (err, EducadoraParvulo) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtneer usuario" })
        }
        if (!EducadoraParvulo) {
            return res.status(404).send({ message: "El usuario no existe" })
        }
        return res.status(200).send({ message: "Usuario logueado correctamente" })
    })
}

module.exports = chechRut