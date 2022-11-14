const express = require('express');
const api = express.Router();
const AsistenteParvuloController = require('../controllers/AsistenteParvuloController');

api.post('/asistente-parvulo', AsistenteParvuloController.createAsistenteParvulo);
api.get('/asistente-parvulos', AsistenteParvuloController.getAsistenteParvulos);
api.delete("/asistente-parvulo/:id", AsistenteParvuloController.deleteAsistenteParvulo);
api.patch("/asistente-parvulo/:id", AsistenteParvuloController.updateAsistenteParvulo);
api.get('/asistente-parvulo/:id', AsistenteParvuloController.getAsistenteParvulo);

module.exports = api;