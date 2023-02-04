const express = require('express');
const fs = require('fs');
const route = require('./src/routes/csvExtractor');
const route2 = require('./src/routes/company');
const route3 = require('./src/routes/sector');

const app = express();

app.use(express.json());
app.use('/api/save', route);
app.use('/company', route2);
app.use('/sector', route3);

// fs.readFile('/Users/soumil_maitra/Desktop/evaluations/evaluation-2/src/utils/csvData.txt', { encoding: 'utf-8' }, (err, data) => {
//   if (!err) {
//     const obj = JSON.parse(data);
//     console.log(obj);x
//   }
// });

app.listen(3000, () => console.log('Example app listening on port 3000!'));
