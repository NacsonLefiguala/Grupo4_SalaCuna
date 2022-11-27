const check = require ('express-validator')
const ValidateResult = require  ('../helpers/ValidateHelpers')


const ValidateCreate = [
    check('NombreCompleto')
    .exists()
    .not()
    .isEmpty(),
    check ('FechaNacimiento')
    .exists()
    .not()
    .isEmpty(),
    check ('Correo')
    .exists()
    .not()
    .isEmpty()
    .isEmail(),

    (res, req, next) => {
        ValidateResult(res,req, next)
    }
];
    module.exports = {ValidateCreate}




