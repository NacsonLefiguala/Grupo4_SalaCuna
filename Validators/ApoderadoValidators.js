const { check, validationResult } = require('express-validator');
const ValidateResult = require('../helpers/ValidateHelpers')



const ValidateCreate = [
    check('NombreCompleto')
    .exists()
    .not()
    .isEmpty(),
    check('Rut')
    .exists()
    .not()
    .isEmpty(),
    check ('FechaNacimiento')
    .exists()
    .not()
    .isEmpty(),
    check ('Domicilio')
    .isEmpty(),
    check ('Correo')
    .exists()
    .not()
    .isEmpty()
    .isEmail(),
    check ('Parentezco')
    .isEmpty(),
    check ('InformacionRelevante')
    .isEmpty(),

    (res, req, next) => {
        ValidateResult(res,req, next)
    }
];
    module.exports = ValidateCreate




