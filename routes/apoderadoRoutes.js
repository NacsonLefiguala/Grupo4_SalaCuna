const express = require('express');
const api = express.Router();
const customHeader = require('../middleware/customHeader')
const ApoderadoController = require('../controllers/ApoderadoController');
const ValidateCreate = require('../validators/ApoderadoValidators')


api.post('/apoderado', ValidateCreate, customHeader(), ApoderadoController.createApoderado);
api.get('/apoderados', ApoderadoController.getApoderados);
api.delete("/apoderado/:id", ApoderadoController.deleteApoderado);
api.patch("/apoderado/:id", ApoderadoController.updateApoderado);
api.get('/apoderado/:id', ApoderadoController.getApoderado);

module.exports = api;
