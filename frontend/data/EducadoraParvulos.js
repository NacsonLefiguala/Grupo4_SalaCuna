import axios from "axios";
import EducadoraParvulo from "../pages/EducadoraParvulo";

const getEducadoraParvulos = async () => {
    const response = await axios.get(`${process.env.SERVIDOR}/EducadoraParvulos`)
    return response
}

const createEducadoraParvulo = () => {
    console.log("POST Educadora Parvulo:" + EducadoraParvulo)
    const response = axios.post(`${process.env.SERVIDOR}/EducadoraParvulo`, EducadoraParvulo)
    return response
}

const getEducadoraParvulo = async (id) => {
    const response = await axios.get(`${process.env.SERVIDOR}/EducadoraParvulo/search/${id.EducadoraParvulo}`)
    return response
}

module.exports = {
    getEducadoraParvulos,
    createEducadoraParvulo,
    getEducadoraParvulo
}