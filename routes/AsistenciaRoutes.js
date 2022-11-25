const express = require('express');
const api = express.Router();
const AsistenciaController = require('../controllers/AsistenciaController');

api.post('/Asitencia', AsistenciaController.createAsistencia);
api.get('/Asistencias', AsistenciaController.getAsistencia);
api.delete("/Asistencia/:id", AsistenciaController.deleteAsistencia);
api.patch("/Asistencia/:id", AsistenciaController.updateAsistencia);
api.get('/Asistencia/:id', AsistenciaController.getSpecificAsistencia)

module.exports = api;