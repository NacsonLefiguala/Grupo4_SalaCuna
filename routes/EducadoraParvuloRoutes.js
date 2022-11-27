const express = require('express');
const api = express.Router();
const EducadoraParvuloController = require('../controllers/EducadoraParvuloController');
const ValidateCreate = require('../Validators/EducadoraParvuloValidator')

api.post('/EducadoraParvulo', ValidateCreate, EducadoraParvuloController.createEducadoraParvulo);
api.get('/EducadoraParvulos', EducadoraParvuloController.getEducadoraParvulos);
api.delete("/EducadoraParvulo/:id", EducadoraParvuloController.deleteEducadoraParvulo);
api.patch("/EducadoraParvulo/:id", EducadoraParvuloController.updateEducadoraParvulo);
api.get('/EducadoraParvulo/:id', EducadoraParvuloController.getSpecificEducadoraParvulo);

module.exports = api;