const express = require('express')
const _ = require('lodash');
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/station/:name', (req, res) => {
    const stationName = req.params.name;
    const data = _.readJsonSync('../seoul_metro_station.json');
    const specificArray = _.find(data, { station_nm: stationName }).array;
    res.json(specificArray);
})

router.get('/line', (req, res) => {
    const lineNumber = req.query.line_num;
    res.send(`Selected line number: ${lineNumber}`);
})

router.post('/station/id', (req, res) => {
    res.send('About Us')
})


module.exports = router
