const { check, validationResult } = require('express-validator');
const ValidateResult = require('../helpers/ValidateHelpers')

const ValidateCreate = [
    check('NombreCompleto')
        .exists()
        .isString()
        .not()
        .isEmpty(),
    check('Rut')
        .exists()
        .isString()
        .not()
        .isEmpty(),
    check('FechaNacimiento')
        .exists()
        .isDate()
        .not()
        .isEmpty(),
    check('Domicilio')
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