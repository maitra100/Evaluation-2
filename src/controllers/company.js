const companyService = require('../services/company');

const getCompany = async (req, res) => {
  try {
    const company = await companyService.companyService(req.body);
    if (!company) { throw new Error('not found'); }
    res.status(200).send(company);
  } catch (e) {
    res.status(404).send('not found');
  }
};

const getCompanyData = async (req, res) => {
  try {
    const msg = await companyService.getCompanyDataServices();
    if (!msg) { throw new Error('error'); }
    res.send(msg);
  } catch (e) {
    res.send('error');
  }
};

const updateScoreController = async (req, res) => {
  const msg = await companyService.updateScore();
  // console.log(data);
  res.status(200).send(msg);
};

const getBySectorSorted = async (req, res) => {
  try {
    const details = await companyService.getBySectorSortedService(req.body);
    if (details.length === 0) { throw new Error('no data found in given sector'); }
    res.status(200).send(details);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const updateCeo = async (req, res) => {
  try {
    const updateState = await companyService.updateCeoService(req.body);
    if (updateState === [0]) { throw new Error('no data updated'); }
    res.status(200).send('updated');
  } catch (e) {
    res.status(404).send(e.message);
  }
};

module.exports = {
  getCompany, getCompanyData, updateScoreController, getBySectorSorted, updateCeo,
};
