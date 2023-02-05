const axios = require('axios');

const getCompanyBySectorService = async (req) => {
  const company = await axios.get(`http://54.167.46.10/sector?name=${req.sector}`);
  console.log(company.data);
  return company.data;
};

module.exports = { getCompanyBySectorService };
