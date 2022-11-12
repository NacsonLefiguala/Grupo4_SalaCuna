const express = require('express');
const api = express.Router();
const AsistenteParvuloController = require('../controllers/AsistenteParvuloController');

api.post('/parvulo', AsistenteParvuloController.createAsistenteParvulo);
api.get('/parvulos', AsistenteParvuloController.getAsistenteParvulos);

module.exports = api;