const express = require('express')

const hostname = 'localhost'

const app = express()

const port = 3000

app.get('/', function (req, res) {
  res.send('<h1>Huynh Tran Tuyen Nguyen</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Nguyên express ${hostname}:${port}/`)
})