const check = requiere ('express-validator')
const ValidateResult = requiere  ('../helpers/ValidateHelper')

const ValidateCreate = [
    check ('NombreCompleto')
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
    .isEmpty(),
    .isEmail()

    (res, req) => {
        
    }


}


]