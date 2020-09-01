'use express';

const express = require('express');

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerHandler = require('./middleware/logger.js');
const timestampHandle = require('./middleware/timestamp.js');

const app = express();

const apiDB = {

  categories: {
    count: 4,
    results: [
      {
        'id': 1,
        'name': 'reading material',
        'display_name': 'books',
        'description': 'for reading',
      },
      {
        'id': 2,
        'name': 'board games',
        'display_name': 'games',
        'description': 'for your gaming',
      },
      {
        'id': 3,
        'name': 'board games',
        'display_name': 'games',
        'description': 'for your gaming',
      },
    ],
  },

};

app.use(timestampHandle);
app.use(loggerHandler);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Routes

// Need a home route
app.get('/', (req, res) => {
  // console.log('req line 16', req);
  const home = {
    query: req.query,
    params: req.params,
    body: req.body,
    stuff: req.stuff,
  };
  res.status(200).json(home);
});

app.post('/products', (req, res) => {
  // console.log(req.body);
  res.status(200).send('working');
});

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




