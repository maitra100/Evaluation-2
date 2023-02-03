const express = require('express');

const route = express().router;

route.post('/save', getCSV);

module.exports = route;
