const express = require('express');
const api = express.Router();
const AsistenteparvuloController = require('../controllers/AsistenteParvuloController');

api.post('/Asistenteparvulo', AsistenteparvuloController.createAsistenteParvulo);
api.get('/Asistenteparvulos', AsistenteparvuloController.getAsistenteParvulos);

module.exports = api;