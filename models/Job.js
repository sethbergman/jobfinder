var mongoose = require('mongoose');
var Promise = require("bluebird");

var jobSchema = mongoose.Schema({
  title:{type:String},
  description:{type:String}
});

var jobs = [
    {title:'Cook', description:'You will be making bagels'},
    {title:'Waiter', description:'You will be putting food on tables'},
    {title:'Programmer', description:'You will have a fun and challenging life'},
    {title:'Plumber', description:'You get a kick out of cleaning the pipes'},
    {title:'Fisherman', description:'You know how to find the perfect fishing spots and enjoy being outdoors'}
];

var Job = mongoose.model('Job', jobSchema);

function findJobs(query) {
  return Promise.cast(mongoose.model('Job').find(query).exec());
}

var createJob = Promise.promisify(Job.create, Job);

exports.seedJobs = function() {
    return findJobs({}).then(function(collection) {
      if(collection.length === 0) {
          return Promise.map(seedJobs, function(job){
            return createJob(job);

        })
      }
  })
}
