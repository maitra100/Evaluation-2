const express = require('express');
const getCsvControllers = require('../controllers/csvExtractor');
const validate = require('../middleware/validator');

const route = express.Router();

route.post('/', validate.companyValidator, getCsvControllers.getCsvController);

module.exports = route;
