'use express';

const express = require('express');

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerHandler = require('./middleware/logger.js');
const timestampHandle = require('./middleware/timestamp.js');

const app = express();

const apiDB = {

  categories: {
    count: 3,
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

  products: {
    count: 3,
    results: [
      {
        'id': 22,
        'category': 'books',
        'name': 'Harry Potter',
        'display_name': 'Harry Potter 2',
        'description': 'for reading',
        'price': '20',
      },
      {
        'id': 30,
        'category': 'games',
        'name': 'sorry',
        'display_name': 'sorry',
        'description': 'too bad',
        'price': '500',
      },
      {
        'id': 84,
        'category': 'games',
        'name': 'tik tac toe',
        'display_name': 'cheap',
        'description': 'old school',
        'price': '2',
      },
    ],
  },

};

app.use(timestampHandle);
app.use(loggerHandler);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Routes


app.post('/products', (req, res) => {
  req.body.id = Math.floor(Math.random() * Math.floor(2000));
  apiDB.products.results.push(req.body);
  res.status(200).send(req.body);
});

app.get('/products', (req, res) => {
  let count = apiDB.products.results.length;
  let results = apiDB.products.results;
  res.json({products: { count, results }});
});

app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  // console.log('req line 98++++++++++++++++++++', req.params.id);
  let record = apiDB.products.results.filter((record) => record.id === parseInt(id));
  res.send(record[0]);
});

// TODO: I am not returning the id within the object. object ===undefined
app.put('/products/:id', (req, res) => {
  let idToUpdate = req.params.id;
  console.log('id to update', idToUpdate)
  let { name, id } = req.body;
  console.log('this is req.body', req.body)
  let updatedRecord = { name, id };
  console.log('this is updated record',updatedRecord);
  apiDB.products.results.map((record) => (record.id === parseInt(idToUpdate)) ? updatedRecord : record);
  // console.log(apiDB);
  res.json(updatedRecord);
});

// app.delete('/api/v1/food/:id', (req, res, next) => {
//   let id = req.params.id;
//   apiDB = apiDB.filter((record) => record.id !== parseInt(id));
//   res.json({});
// });

// … uses the object in the body to replace the record with the :id specified

// app.delete('/products/:id', (req, res) => {}) … deletes the record with the :id specified
// … and repeat for categories

function start(port) {
  app.listen(port, () => console.log('running on', port));
}

module.exports = {
  start: start,
  server: app,
};




