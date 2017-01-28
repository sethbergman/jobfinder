# Job Finder

[![Greenkeeper badge](https://badges.greenkeeper.io/sethbergman/jobfinder.svg)](https://greenkeeper.io/)
Test and Behavior Driven Development - built with MongoDB, Express, Angular and Node

[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)](https://github.com/sethbergman/jobfinder)
[![Dependency Status](https://david-dm.org/sethbergman/jobfinder.svg)](https://david-dm.org/sethbergman/jobfinder)
[![devDependency Status](https://david-dm.org/sethbergman/jobfinder/dev-status.svg)](https://david-dm.org/sethbergman/jobfinder#info=devDependencies)
[![Docker Repository on Quay](https://quay.io/repository/sethbergman/jobfinder/status "Docker Repository on Quay")](https://quay.io/repository/sethbergman/jobfinder)
[![Codeship](https://img.shields.io/codeship/d6c1ddd0-16a3-0132-5f85-2e35c05e22b1.svg?maxAge=2592000)](https://github.com/sethbergman/jobfinder)
[![Build Status](https://drone.io/github.com/sethbergman/jobfinder/status.png)](https://drone.io/github.com/sethbergman/jobfinder/latest)


## Prerequisites

You will need the following software properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [MongoDB](https://www.mongodb.org/)

### Clone the Project
```
git clone https://github.com/sethbergman/jobfinder.git && cd jobfinder
```

### Install Dependencies
```
npm install && bower install
```

### Initialize MongoDB
```
mongod --dbpath data
```

### Run the app
```
npm start
```

### Test Driven Development
```
npm test
```

### Behavior Driven Development
```
karma start
```
If you are developing locally and you want karma to watch the files for changes then you'll need to change line 69 in `karma.conf.js` file to `singleRun: false`. It is set to `true` to enable tests in continuous integration mode.

### Deployment

This application uses the 12 Factor methodology for building applications which run as a service.
Learn more about __<a href="http://12factor.stackriot.com" target="_blank">The Twelve Factors</a>__.

I use <a href="http://dokku.viewdocs.io/dokku/" target="_blank">dokku</a>, a Docker powered mini-Heroku that I run on my own server. The only environment variable I had to set is the `MONGODB_URL`. It's NEVER a good idea to commit your database connection string into the repository. In my project's root directory, I entered the following in my terminal window.

```
dokku config:set MONGODB_URL=mongodb://<dbuser>:<dbpass>@ds12211.mlab.com:12211/jobslist
```

This is of course after I added the dokku remote and committed all of my project files.

```
git remote add dokku dokku@dokku-server.com:jobfinder
git push dokku master
```
