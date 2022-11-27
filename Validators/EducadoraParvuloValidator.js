const { check, validationResult } = require('express-validator');
const ValidateResult = require('../helpers/ValidateHelpers')

const ValidateCreate = [
    check('NombreCompleto')
        .exists()
        .not()
        .isString()
        .isEmpty(),
    check('FechaNacimiento')
        .exists()
        .not()
        .custom((value, { req }) => {
            let FechaActual = new Date.now();
            let edad = FechaActual.getFullYear() - value.getFullYear();
            if (edad < 18) {
                throw new Error('Edad no valida')
            }
            return true
        })
        .isDate()
        .isEmpty(),
    check('Domicilio')
        .isEmpty(),
    check('Rut')
        .exists()
        .not()
        .isString()
        .isEmpty(),
    check('Telefono')
        .exists()
        .not()
        .isLength({ min: 9, max: 9 })
        .isNumeric()
        .isEmpty(),
    check('Correo')
        .exists()
        .not()
        .isEmpty()
        .isEmail(),
    check('Parentezco')
        .isEmpty(),
    check('InformacionRelevante')
        .isEmpty(),
    check('Foto')
        .exists()
        .not()
        .isEmpty(),

    (err, res, req, next) => {
        ValidateResult(err, res, req, next)
    }
];

module.exports = ValidateCreate