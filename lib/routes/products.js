'use strict';

const express = require('express');

const router = express.Router();

const products = require('../models/products/products.collection')

router.post('/products', create);
router.get('/products', read);
router.get('/products/:id', readOne);
router.put('/products/:id', put);
router.delete('/products/:id', destroy);




async function create(req, res) {
  let newRecord = await products.create(req.body);
  res.status(201).json(newRecord);
  // req.body.id = Math.floor(Math.random() * Math.floor(2000));
  // apiDB.products.results[req.body.id] = req.body;
  // apiDB.products.count = apiDB.products.count + 1;
  // res.status(201).send(req.body);
}

function read(req, res) {
  let count = apiDB.products.count;
  let results = apiDB.products.results;
  res.json({products: { count, results }});
}

function readOne(req, res) {
  let id = req.params.id;
  console.log(id);
  let record = apiDB.products.results[id];
  res.status(200).send(record);
}

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

module.exports = router;
