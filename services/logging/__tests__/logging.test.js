'use strict';

const logging = require('..');
const assert = require('assert').strict;

assert.strictEqual(logging(), 'Hello from logging');
console.info('logging tests passed');
