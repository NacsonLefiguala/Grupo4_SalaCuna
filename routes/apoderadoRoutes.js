const express = require('express');
const api = express.Router();
const ApoderadoController = require('../controllers/ApoderadoController');

api.post('/apoderado', ApoderadoController.createApoderado);
api.get('/apoderados', ApoderadoController.getApoderados);
api.delete("/apoderado/:id", ApoderadoController.deleteApoderado);
api.patch("/apoderado/:id", ApoderadoController.updateApoderado);
api.get('/apoderado/:id', ApoderadoController.getApoderado);

module.exports = api;