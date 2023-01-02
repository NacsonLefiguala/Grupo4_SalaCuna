import axios from "axios"

const login = (rut) => {
    const response = axios.post(`${process.env.SERVIDOR}/login`, { rut })
    return response
}

module.exports = {
    login
}

//recuerda al final colocar {rut} linea 4
