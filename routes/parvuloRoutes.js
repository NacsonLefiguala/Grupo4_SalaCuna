const express = require('express');
const api = express.Router();
const parvuloController = require('../controllers/ParvuloController');

api.post('/parvulo', parvuloController.createParvulo);
api.get('/parvulos', parvuloController.getParvulos);

module.exports = api;