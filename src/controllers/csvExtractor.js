const fs = require('fs');
const getCsvServices = require('../services/csvExtractor');

const getCsvController = async (req, res) => {
  try {
    const response = await getCsvServices.getCsvServices(req.body);
    const csvStr = response.data;
    const lines = csvStr.split('\n');
    const result = [];
    const headers = lines[0].split(',');
    for (let index = 1; index < lines.length; index++) {
      const obj = {};
      const currentline = lines[index].split(',');

      for (let index2 = 0; index2 < headers.length; index2++) {
        obj[headers[index2]] = currentline[index2];
      }

      result.push(obj);
    }
    fs.writeFile('/Users/soumil_maitra/Desktop/evaluations/evaluation-2/src/utils/csvData.txt', JSON.stringify(result), (err) => {
      if (err) {
        console.error(err);
      }
    });
    res.status(201).send('fileCreated');
  } catch (error) {
    console.log(error.message);
    res.status(404).send('not found');
  }
};

module.exports = { getCsvController };
