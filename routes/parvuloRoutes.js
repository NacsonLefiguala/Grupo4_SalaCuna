const express = require('express');
const api = express.Router();
const ParvuloController = require('../controllers/ParvuloController');
const ValidatorCreate = require('../Validators/ParvuloValidator')

api.post('/parvulo', ValidatorCreate, ParvuloController.createParvulo);
api.get('/parvulos', ParvuloController.getParvulos);
api.delete("/parvulo/:id", ParvuloController.deleteParvulo);
api.patch("/parvulo/:id", ParvuloController.updateParvulo);
api.get('/parvulo/:id', ParvuloController.getParvulo);

module.exports = api;