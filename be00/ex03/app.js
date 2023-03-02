const express = require('express')
const app = express()
const routes = require('./routes')

app.use('/', routes)

app.listen(4200, () => {
  console.log('Server started on port 4200')
})
