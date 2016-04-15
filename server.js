var express = require('express');
var mongoose = require('mongoose');
var jobModel = require('./models/Job')

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    mongoose.model('Job').find({}).exec(function(error, jobsList) {
      res.send(jobsList);
    })
})

app.get('*', function(req, res) {
  res.render('index');
});

// mongoose.connect('mongodb://localhost/jobfinder');
// mongoose.connect('process.env.MONGO_URL');
mongoose.connect('mongodb://sbergman:austin@ds011281.mlab.com:11281/jobslist');
// mongoose.connect('mongodb://jobs:c883beed2b71e3346ad7681ec8a5b817@dokku-mongo-jobs:27017/jobs');

var con = mongoose.connection;

con.once('open', function() {
  console.log('conncted to mongodb successfully!')
  jobModel.seedJobs();
});

app.listen(process.env.PORT | 5000);
