const { companyService, getCompanyDataServices, updateScore } = require('../services/company');

const getCompany = async (req, res) => {
  const company = await companyService(req.body);
  res.send(company);
};

const getCompanyData = async (req, res, next) => {
  const data = await getCompanyDataServices();
  // console.log(data);
  res.send(data);
  next();
};

const updateScoreController = async (req, res) => {
  const data = await updateScore();
  // console.log(data);
  res.send(data);
};

module.exports = { getCompany, getCompanyData, updateScoreController };
