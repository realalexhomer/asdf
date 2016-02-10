'use strict';

let views = require('co-views');

module.exports = views(__dirname + '/../views', {
  default: 'jade'
});
