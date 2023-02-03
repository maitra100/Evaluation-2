const getCompanyBySectorService = require('../services/sector');

const getCompanyBySector = async (req, res) => {
  const company = await getCompanyBySectorService(req.body);
  res.send(company);
};

module.exports = getCompanyBySector;
