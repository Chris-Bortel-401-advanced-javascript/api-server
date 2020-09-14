'use express';

const express = require('express');
const app = express();

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerHandler = require('./middleware/logger.js');
const timestampHandle = require('./middleware/timestamp.js');

const apiRouter = require('./routes/api-route.js');

app.use(express.json());

app.use(timestampHandle);
app.use(loggerHandler);
app.use(express.urlencoded({extended:true}));

app.use('/api/v2', apiRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log('running on', port));
}

module.exports = {
  start: start,
  server: app,
};
