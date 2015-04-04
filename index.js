'use strict';

var del = require('del');
var thenify = require('thenify');

module.exports = thenify.withCallback(del);
