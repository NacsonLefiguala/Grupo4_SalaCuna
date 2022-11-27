const { check, validationResult } = require('express-validator');
const ValidateResult = require('../helpers/ValidateHelpers')

const ValidateCreate = [
    check('NombreCompleto')
        .exists()
        .not()
        .isString()
        .isEmpty(),
    check('FechaDeNacimiento')
        .exists()
        .not()
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
        .isEmail()
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