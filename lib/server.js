'use express';

const express = require('express');
const app = express();
const apiDB = require('./models/mock-db.js');

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerHandler = require('./middleware/logger.js');
const timestampHandle = require('./middleware/timestamp.js');

// const categoriesRouter = require('../lib/routes/categories.js');
app.use(express.json());

app.use(timestampHandle);
app.use(loggerHandler);
app.use(express.urlencoded({extended:true}));

// Routes

app.post('/products', post);
app.get('/products', get);
app.get('/products/:id', getOne);
app.put('/products/:id', put);
app.delete('/products/:id', destroy);




function post(req, res) {
  req.body.id = Math.floor(Math.random() * Math.floor(2000));
  apiDB.products.results[req.body.id] = req.body;
  apiDB.products.count = apiDB.products.count + 1;
  res.status(201).send(req.body);
}

function get(req, res) {
  let count = apiDB.products.count;
  let results = apiDB.products.results;
  res.json({products: { count, results }});
}

function getOne(req, res) {
  let id = req.params.id;
  console.log(id);
  let record = apiDB.products.results[id];
  res.status(200).send(record);
}

// TODO: I am not returning the id within the object. object ===undefined
function put(req, res) {
  let idToUpdate = req.params.id;

  if(apiDB.products.results[idToUpdate]){
    Object.keys(req.body).map((record) => {
      console.log('record+++++++++++++++', record);
      apiDB.products.results[idToUpdate][record] = req.body[record];
    });
  }
  res.status(201).json(apiDB.products.results[idToUpdate]);
}

function destroy (req, res) {
  let idToDelete = req.params.id;

  if(apiDB.products.results[idToDelete]){
    delete apiDB.products.results[idToDelete];
  }
  res.status(204).json(apiDB.products.results[idToDelete]);
}







app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log('running on', port));
}

module.exports = {
  start: start,
  server: app,
};




