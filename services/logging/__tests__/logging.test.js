'use strict';

const loggingService = require('../lib/logging');

describe('Logging Service', () => {
  it('should log messages', () => {
    loggingService.info('Test log message');
  })
});