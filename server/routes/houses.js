const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const getPercentileRangeForHouses = require('../lib/stats');
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

router.get('/houses', cors(corsOptions), (_, res) => {
  const json = fs.readFileSync(path.join(__dirname, '../data/houses.json'), 'utf-8')
  const houses = JSON.parse(json)
  const housesWithRanges = getPercentileRangeForHouses(houses);

  res.json(housesWithRanges);
});

module.exports = router;
