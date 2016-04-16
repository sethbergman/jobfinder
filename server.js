var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job');
var jobsData = require("./jobs-data.js");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    jobsData.findJobs().then(function(collection) {
      res.send(collection);
    })
})

app.get('*', function(req, res) {
  res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect(process.env.MONGODB_URL);


var con = mongoose.connection;

con.once('open', function() {
  console.log('conncted to mongodb successfully!')
  jobModel.seedJobs();
});

app.listen(process.env.PORT | 5000);
