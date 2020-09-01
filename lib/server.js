'use express';

const express = require('express');

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerHandler = require('./middleware/logger.js');
const timestampHandle = require('./middleware/timestamp.js');

const app = express();

app.use(timestampHandle);
app.use(loggerHandler);
// Routes

// Need a home route
app.get('/', (req, res) => {
  console.log('req line 16', req);
  const home = {
    query: req.query,
    params: req.params,
    body: req.body,
    stuff: req.stuff
  };
  res.status(200).json(home);
});

// app.post('/products', (req, res) => {})

// app.get('/products/:id', (req, res) => {})

// app.put('/products/:id', (req, res) => {}) … uses the object in the body to replace the record with the :id specified

// app.delete('/products/:id', (req, res) => {}) … deletes the record with the :id specified
// … and repeat for categories

function start(port) {
  app.listen(port, () => console.log('running on', port));
}

module.exports = {
  start: start,
  server: app,
};




