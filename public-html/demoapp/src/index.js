// const apm = require("elastic-apm-node/start")
const express = require('express')
// import apm from 'elastic-apm-node//start'

var apm = require('elastic-apm-node').start({
  serviceName: 'demoapp',  
  serverUrl: 'http://apm-server:8200'
})

const app = express()
app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(5000, () => console.log('Server running on port 5000'))
