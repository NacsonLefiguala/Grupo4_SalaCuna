const express = require('express');
const api = express.Router();
const apoderadoController = require('../controllers/ApoderadoController');

api.post('/apoderado', apoderadoController.createApoderado);
api.get('/apoderados', apoderadoController.getApoderados);

module.exports = api;