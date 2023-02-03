const express = require('express');
const getCsvControllers = require('../controllers/csvExtractor');

const route = express().router;

route.post('/save', getCsvControllers.getCsvController);

module.exports = route;
