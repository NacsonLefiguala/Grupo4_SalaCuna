const customGeader = (req, res, next) => {
    try {
        if (req.body.isAdmin())
            next()
    } catch (e) {
        res.status(403).send({ error: "Acceso denegado" })
    }
}