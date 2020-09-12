'use strict';

const express = require('express');

const router = express.Router();

const products = require('../models/products/products.collection');

router.post('/products', create);
router.get('/products', read);
router.get('/products/:id', readOne);
router.put('/products/:id', update);
router.delete('/products/:id', destroy);


async function create(req, res) {
  let newRecord = await products.create(req.body);
  res.status(201).json(newRecord);
}

async function read(req, res) {
  let results = await products.read(); 
  let output = { count: results.length, results:results };
  res.status(200).json(output);
}

async function readOne(req, res) {
  let results = await products.read(req.params.id);
  res.status(200).json(results);
}

async function update(req, res) {
  let idToUpdate = await products.update(req.params.id, req.body);
  res.status(201).json(idToUpdate);
}

async function destroy (req, res) {
  let idToDelete = await products.destroy(req.params.id);
  res.status(204).json(idToDelete);
}

module.exports = router;
