const express = require('express');
const api = express.Router();
const EducadoraParvuloController = require('../controllers/EducadoraParvuloController');
const ValidatorCreate = require('../Validators/EducadoraParvuloValidator')
const checkRUT = require('../middleware/checkRUT')

api.post('/EducadoraParvulo/crear', ValidatorCreate, EducadoraParvuloController.createEducadoraParvulo);
api.get('/EducadorasParvulos', EducadoraParvuloController.getEducadoraParvulos);
api.delete("/EducadoraParvulo/:id", EducadoraParvuloController.deleteEducadoraParvulo);
api.patch("/EducadoraParvulo/update/:id", EducadoraParvuloController.updateEducadoraParvulo);
api.get('/EducadoraParvulo/search/:id', EducadoraParvuloController.getSpecificEducadoraParvulo);
api.post('/login', checkRUT)

module.exports = api;