const express = require('express');
const {
  getCompany, getCompanyData, updateScoreController, getBySectorSorted, updateCeo,
} = require('../controllers/company');

const route2 = express.Router();

route2.post('/', getCompany);
route2.get('/store', getCompanyData);
route2.get('/store/update', updateScoreController);
route2.get('/sortScore', getBySectorSorted);
route2.get('/update', updateCeo);
module.exports = route2;
