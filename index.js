const express = require('express');
const route = require('./src/routes/csvExtractor');

const app = express();

app.use(express.json());
app.use('/api/save', route);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
