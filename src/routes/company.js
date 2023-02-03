const express = require('express');
const { getCompany, getCompanyData, updateScoreController } = require('../controllers/company');

const route2 = express.Router();

route2.post('/', getCompany);
route2.get('/store', getCompanyData, updateScoreController);

module.exports = route2;
