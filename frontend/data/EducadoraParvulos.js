import axios from "axios";

const getEducadoraParvulos = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/EducadoraParvulos`)
    return response
}

const createEducadoraParvulo = (EducadoraParvulo, rut) => {
    const response = axios.post(`${process.env.SERVIDOR}/EducadoraParvulo/crear`, {
        NombreCompleto: EducadoraParvulo.NombreCompleto,
        Rut: rut,
        fechanac: EducadoraParvulo.FechaNacimiento,
        Domicilio: EducadoraParvulo.Domicilio,
        Telefono: EducadoraParvulo.Telefono,
        Correo: EducadoraParvulo.Correo,
        Foto: EducadoraParvulo.Foto,
        InformacionRelevante: EducadoraParvulo.InformacionRelevante
    })
    return response
}

const getEducadoraParvulo = async (id) => {
    const response = await axios.get(`${process.env.SERVIDOR}/EducadoraParvulo/ver/${_id}`)
    return response
}

const updateEducadoraParvulo = async (id, EducadoraParvulo) => {
    const response = await axios.put(`${process.env.SERVIDOR}/EducadoraParvulo/actualizar/${_id}`, EducadoraParvulo)
    return response
}

module.exports = {
    getEducadoraParvulos,
    createEducadoraParvulo,
    getEducadoraParvulo,
    updateEducadoraParvulo
}