const axios = require('axios');

const getCsvServices = async (req) => {
  const response = await axios.get(req.urlLink, { responseType: 'blob' });
  return response;
};

module.exports = { getCsvServices };
