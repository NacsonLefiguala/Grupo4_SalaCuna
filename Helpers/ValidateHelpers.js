const ValidationResult = requiere ('express-validator');

const ValidateResult = (res, req,) =>{
    try {
        ValidateResult(req).throw()
        return next()
    }catch (err)
    res.status(403)


}