const ValidationResult = require ('express-validator');

const ValidateResult = (res, req, next) =>{
    try {
        ValidationResult(req).throw()
        return next()
    } catch (err){
    res.status(403)
    res.send ({errors: err.array()})

    }
}
module.exports = ValidateResult