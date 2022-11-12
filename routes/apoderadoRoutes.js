const express = require('express');
const api = express.Router();
const apoderadoController = require('../controller/apoderadoController');

api.post('/apoderado', apoderadoController.createApoderado);
api.get('/apoderado', apoderadoController.getApoderado);

module.exports = api;