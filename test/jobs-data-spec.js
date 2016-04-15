var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require('../models/Job');

function resetJobs(callback) {
  mongoose.connection.collections['jobs'].drop(callback);
}

mongoose.connect('mongodb://localhost/jobfinder');

describe("get jobs", function(){
  it("should never be empty since jobs are seeded", function(done){
    mongoose.connect('mongodb://localhost/jobfinder', function() {
      resetJobs(function(){
        jobModel.seedJobs(function(){
          mongoose.model('Job').find({}).exec(function(error, jobsList) {
            expect(jobsList.length).to.be.at.least(1);
            done();
          });
        });
      });
    });
  });
});
