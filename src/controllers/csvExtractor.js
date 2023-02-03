const fs = require('fs');
const getCsvServices = require('../services/csvExtractor');

const getCsvController = async (req, res) => {
  try {
    const response = await getCsvServices.getCsvServices(req.body);
    const csvStr = response.data;
    const lines = csvStr.split('\n');
    const result = [];

    // NOTE: If your columns contain commas in their values, you'll need
    // to deal with those before doing the next step
    // (you might convert them to &&& or something, then covert them back later)
    // jsfiddle showing the issue https://jsfiddle.net/
    const headers = lines[0].split(',');
    for (let i = 1; i < lines.length; i++) {
      const obj = {};
      const currentline = lines[i].split(',');

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    fs.writeFile('/Users/soumil_maitra/Desktop/evaluations/evaluation-2/src/utils/csvData.txt', JSON.stringify(result), (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
    res.status(201).send('fileCreated');
  } catch (error) {
    console.log(error.message);
    res.status(404).send('not found');
  }
};

module.exports = { getCsvController };
