const express = require('express');
const api = express.Router();
const parvuloController = require('../controllers/ParvuloController');

api.post('/parvulo', parvuloController.createParvulo);
api.get('/parvulos', parvuloController.getParvulos);
api.get('/parvulosSpecific', parvuloController.getSpecificParvulo);
api.get('/updateParvulo', parvuloController.updateParvulo);
api.get('/deleteParvulo', parvuloController.getParvulos);

module.exports = api;