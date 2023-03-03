const express = require('express')
const bodyParser = require('body-parser');
const _ = require('lodash');
const router = express.Router()

const data = require('../seoul_metro_station.json')


router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/station/:name', (req, res) => {
    const stationName = req.params.name
    const regex = /^[A-Za-z][A-Za-z0-9\s]*$/;
    let result = [];
    if (regex.test(stationName))
        result = data.DATA.filter(item => item.station_nm_eng === stationName);
    else
        result = data.DATA.filter(item => item.station_nm === stationName);
    res.status(200).json(result)
})

router.get('/line', (req, res) => {
    // default is '01호선'
    const lineNum = req.query.line_num || '01호선';
    const result = data.DATA.filter(item => item.line_num === lineNum);
  res.status(200).json(result);
});

router.post('/station/id', (req, res) => {
  const frCode = req.body.fr_code;

  if (!frCode)
    return res.status(400).json({ error: 'fr_code is required' });

  const result = data.DATA.filter(item => item.fr_code === frCode);
  res.status(200).json(result);
});

module.exports = router;