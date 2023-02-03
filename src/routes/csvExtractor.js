const express = require('express');
const getCsvController = require('../controllers/csvExtractor');

const route = express().router;

route.post('/save', getCsvController);

module.exports = route;
