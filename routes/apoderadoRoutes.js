const express = require('express');
const api = express.Router();
const ApoderadoController = require('../controllers/apoderadoController');

api.post('/Apoderado', ApoderadoController.createApoderado);
api.get('/Apoderados', ApoderadoController.getApoderados);
api.delete("/Apoderado/:id", ApoderadoController.deleteApoderado);
api.patch("/Apoderado/:id", ApoderadoController.updateApoderado);
api.get('/Apoderado/:id', ApoderadoController.getApoderado);

module.exports = api;