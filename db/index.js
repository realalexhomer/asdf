'use strict';

let monk = require('monk');
let wrap = require('co-monk');

let url = 'mongodb://localhost:27017/test';

module.exports = monk(url);