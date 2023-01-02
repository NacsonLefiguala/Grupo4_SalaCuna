import axios from 'axios';

const getEducadorasParvulos = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/EducadorasParvulos`);
    return response
}

const createEducadoraParvulo = (EducadoraParvulo) => {
    const response = axios.post(`${process.env.SERVIDOR}/EducadoraParvulo`, {
        NombreCompleto: EducadoraParvulo.NombreCompleto,
        Rut: EducadoraParvulo.Rut,
        FechaDeNacimiento: EducadoraParvulo.FechaDeNacimiento,
        Domicilio: EducadoraParvulo.Domicilio,
        Telefono: EducadoraParvulo.Telefono,
        Correo: EducadoraParvulo.Correo,
        Foto: EducadoraParvulo.Foto,
        InformacionRelevante: EducadoraParvulo.InformacionRelevante
    });
    return response
}

const getEducadoraParvulo = async (id) => {
    console.log(id)
    const response = await axios.get(`${process.env.SERVIDOR}/EducadorasParvulos/ver/${id}`)
    return response
}

const updateEducadoraParvulo = (id, EducadoraParvulo) => {
    const response = axios.put(`${process.env.SERVIDOR}/EducadoraParvulo/Actualizar/${id}`, EducadoraParvulo)
    return response
}

module.exports = {
    getEducadorasParvulos,
    createEducadoraParvulo,
    getEducadoraParvulo,
    updateEducadoraParvulo
}