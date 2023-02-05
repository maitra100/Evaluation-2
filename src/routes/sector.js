const express = require('express');
const getCompanyBySector = require('../controllers/sector');
const validation = require('../middleware/validator');

const route3 = express.Router();

route3.post('/', validation.companyValidator, getCompanyBySector);

module.exports = route3;
