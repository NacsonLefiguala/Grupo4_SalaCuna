const express = require('express');
const api = express.Router();
const AsistenciaController = require('../controllers/AsistenciaController');
const ValidatorCreate = require('../Validators/AsistenciaValidators')

api.post('/Asistencia', ValidatorCreate, AsistenciaController.createAsistencia);
api.get('/Asistencias', AsistenciaController.getAsistencias);
api.delete("/Asistencia/:id", AsistenciaController.deleteAsistencia);
api.patch("/Asistencia/:id", AsistenciaController.updateAsistencia);
api.get('/Asistencia/:id', AsistenciaController.getSpecificAsistencia);

module.exports = api;