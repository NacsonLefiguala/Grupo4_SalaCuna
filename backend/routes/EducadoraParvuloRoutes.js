const express = require('express');
const api = express.Router();
const EducadoraParvuloController = require('../controllers/EducadoraParvuloController');
const ValidatorCreate = require('../Validators/EducadoraParvuloValidator')
const chechRut = require('../middleware/checkRut')

api.post('/EducadoraParvulo/crear', ValidatorCreate, EducadoraParvuloController.createEducadoraParvulo);
api.get('/EducadoraParvulos', EducadoraParvuloController.getEducadoraParvulos);
api.delete("/EducadoraParvulo/:id", EducadoraParvuloController.deleteEducadoraParvulo);
api.patch("/EducadoraParvulo/actualizar/:id", EducadoraParvuloController.updateEducadoraParvulo);
api.get('/EducadoraParvulo/ver/:id', EducadoraParvuloController.getSpecificEducadoraParvulo);
api.post('/login', chechRut)

module.exports = api;