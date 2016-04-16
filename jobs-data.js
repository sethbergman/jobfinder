var mongoose = require("mongoose");
var Promise = require("bluebird");
var Job = mongoose.model('Job');
var JobModel = require('./models/Job');


var findJobs = function(query) {
  return Promise.cast(Job.find(query).exec());
}

var createJob = Promise.promisify(Job.create, Job);

exports.findJobs = findJobs;

exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

exports.saveJob = createJob;

exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
      if(collection.length === 0) {
          return Promise.map(seedJobs, function(job){
            return createJob(job);
        })
      }
  })
}

var seedJobs = [
    {title:'Cook', description:'You will be making bagels'},
    {title:'Waiter', description:'You will be putting food on tables'},
    {title:'Programmer', description:'You will have a fun and challenging life'},
    {title:'Plumber', description:'You get a kick out of cleaning the pipes'},
    {title:'Fisherman', description:'You know how to find the perfect fishing spots and enjoy being outdoors'}
];
