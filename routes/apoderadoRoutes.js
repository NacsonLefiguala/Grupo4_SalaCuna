const express = require('express');
const api = express.Router();
const apoderadoController = require('../controller/apoderadoController');

api.post('/apoderado', apoderadoController.createApoderado);
api.get('/apoderados', apoderadoController.getApoderado);

module.exports = api;