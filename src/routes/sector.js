const express = require('express');
const getCompanyBySector = require('../controllers/sector');

const route3 = express.Router();

route3.use('/', getCompanyBySector);

module.exports = route3;
