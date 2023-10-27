'use strict';

const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'my-logging-service',
  level: 'info',
})

module.exports = logger;