const express = require('express');
const getCsvControllers = require('../controllers/csvExtractor');

const route = express.Router();

route.post('/', getCsvControllers.getCsvController);

module.exports = route;
