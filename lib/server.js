'use express';

const express = require('express');

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerHandler = require('./middleware/logger.js');
const timestampHandle = require('./middleware/timestamp.js');

const app = express();


function start(port) {
  app.listen(port, () => console.log('running on', port));
}

module.exports = {
  start: start,
  server: app,
};




