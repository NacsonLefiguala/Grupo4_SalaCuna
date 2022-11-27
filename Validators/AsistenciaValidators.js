const { check, validationResult } = require('express-validator');
const ValidateResult = require('../Helpers/ValidateHelpers')

const ValidatorCreate = [
    check('Sala')
        .exists()
        .not()
        .isString()
        .isEmpty(),
    check('FechaClase')
        .exists()
        .not()
        .isDate()
        .isEmpty(),
    check('Actividad')
        .exists()
        .not()
        .isEmpty(),

    (err, res, req, next) => {
        ValidateResult(err, res, req, next)
    }
];
module.exports = ValidatorCreate