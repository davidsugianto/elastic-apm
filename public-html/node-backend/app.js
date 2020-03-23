const apm = require('elastic-apm-node').start({
  serviceName: 'node-backend',
  serverUrl: 'http://apm-server:8200'
})

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

//server configuration
var basePath = '/todo';
var port = 6200;

// Connection to DB

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/mern_stack', { // local development
mongoose.connect('mongodb://mongodb:27017/mern_stack', { // production development
  useNewUrlParser: true,
  user: 'ervina',
  pass: 'uNVTniFHqkcxOmPDuzxX'
}).then(() => {
  console.log('successfully connected to the database');
  console.log('Backend Started');
}).catch(err => {
  console.log('error connecting to the database');
  console.error('Backend error:', err.stack);
  process.exit(1);
});

// Routes and Backend Funcioncalities
var todoListRoutes = require('./src/routes/todoListRoutes');

// App Instance
var app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(basePath, todoListRoutes);

// Execute App
app.listen(port, () => {
  console.log('TodoList Backend running on Port: ',port);
});
