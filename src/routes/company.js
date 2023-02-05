const express = require('express');
const {
  getCompany, getCompanyData, updateScoreController, getBySectorSorted, updateCeo,
} = require('../controllers/company');

const validation = require('../middleware/validator');

const route2 = express.Router();

route2.post('/', validation.companyValidator, getCompany);
route2.get('/store', getCompanyData);
route2.get('/store/update', updateScoreController);
route2.get('/sortScore', validation.companyValidator, getBySectorSorted);
route2.get('/update', validation.companyValidator, updateCeo);
module.exports = route2;
