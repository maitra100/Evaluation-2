const axios = require('axios');
const fs = require('fs');
const db = require('../../database/models');

const { company } = db;

const companyService = async (req) => {
  const company = await axios.get(`http://54.167.46.10/company/${req.id}`);
  return company.data;
};

const getCompanyDataServices = async () => {
  fs.readFile('/Users/soumil_maitra/Desktop/evaluations/evaluation-2/src/utils/csvData.txt', { encoding: 'utf-8' }, async (err, data) => {
    if (!err) {
      const obj = JSON.parse(data);
      console.log(obj[0].company_id);
      const sectors = [];
      for (let index = 0; index < obj.length; index++) {
        console.log(1);
        if (sectors.includes(obj[index].company_sector)) { continue; }
        const companyParams = await axios.get(`http://54.167.46.10/company/${obj[index].company_id}`);
        const details = companyParams.data;
        const entry = await company.create({
          idNum: details.id, name: details.name, ceo: details.ceo, score: 5, sector: obj[index].company_sector,
        });
      }
    }
  });
  return 'entered companies in database';
};

const updateScore = async () => {
  fs.readFile('/Users/soumil_maitra/Desktop/evaluations/evaluation-2/src/utils/csvData.txt', { encoding: 'utf-8' }, async (err, data) => {
    if (!err) {
      const obj = JSON.parse(data);
      console.log(obj[0].company_id);
      const sectors = [];
      for (let index = 0; index < obj.length; index++) {
        console.log(2);
        if (sectors.includes(obj[index].company_sector)) {
          console.log(1);
          continue;
        }
        const companyParams = await axios.get(`http://54.167.46.10/sector?name=${obj[index].company_sector}`);
        const details = companyParams.data;
        sectors.push(obj[index].company_sector);
        for (index = 0; index < details.length; index++) {
          // console.log(details[index]);
          const Score = ((details[index].performanceIndex[0].value * 10) + (details[index].performanceIndex[1].value / 10000) + (details[index].performanceIndex[2].value * 10) + details[index].performanceIndex[3].value) / 4;
          const update = await company.update({ score: Score }, {
            where: {
              idNum: details[index].companyId,
            },
          });
        }
      }
    }
    return 'updated scores';
  });
};

const getBySectorSortedService = async (req) => company.findAll({
  where: {
    sector: req.sector,
  },
  order: [
    ['score', 'DESC'],
  ],
});

module.exports = {
  companyService, getCompanyDataServices, updateScore, getBySectorSortedService,
};
