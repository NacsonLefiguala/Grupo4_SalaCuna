const express = require('express');
const api = express.Router();
const AsistenteParvuloController = require('../controllers/AsistenteParvuloController');

api.post('/AsistenteParvulo', AsistenteParvuloController.createAsistenteParvulo);
api.get('/AsistenteParvulos', AsistenteParvuloController.getAsistenteParvulos);
api.delete("/AsistenteParvulo/:id", AsistenteParvuloController.deleteAsistenteParvulo);
api.patch("/AsistenteParvulo/:id", AsistenteParvuloController.updateAsistenteParvulo);

module.exports = api;