const getCompanyBySectorServices = require('../services/sector');

const getCompanyBySector = async (req, res) => {
  try {
    const company = await getCompanyBySectorServices.getCompanyBySectorService(req.body);
    if (!company) { throw new Error('not found'); }
    res.status(200).send(company);
  } catch (e) {
    res.status(404).send('not found');
  }
};

module.exports = getCompanyBySector;
