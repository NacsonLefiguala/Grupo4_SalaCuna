const express = require('express');
const api = express.Router();
const ParvuloController = require('../controllers/ParvuloController');

api.post('/Parvulo', ParvuloController.createParvulo);
api.get('/Parvulos', ParvuloController.getParvulos);
api.delete("/Parvulo/:id", ParvuloController.deleteParvulo);
api.patch("/Parvulo/:id", ParvuloController.updateParvulo);
api.get('/Parvulo/:id', ParvuloController.getParvulo);

module.exports = api;