const {
  companyService, getCompanyDataServices, updateScore, getBySectorSortedService,
} = require('../services/company');

const getCompany = async (req, res) => {
  const company = await companyService(req.body);
  res.send(company);
};

const getCompanyData = async (req, res) => {
  const data = await getCompanyDataServices();
  // console.log(data);
  res.send(data);
};

const updateScoreController = async (req, res) => {
  const data = await updateScore();
  // console.log(data);
  res.send(data);
};

const getBySectorSorted = async (req, res) => {
  const details = await getBySectorSortedService(req.body);
  res.send(details);
};

module.exports = {
  getCompany, getCompanyData, updateScoreController, getBySectorSorted,
};
