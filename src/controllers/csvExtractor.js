const getCsvServices = require('../services/csvExtractor');

const getCsvController = async (req, res) => {
  try {
    const response = await getCsvServices.getCsvServices(req.body);
    console.log(response.data);
  } catch (error) {
    res.status(404).send('not found');
  }
};

module.exports = { getCsvController };
