'use strict';

const express = require('express');

const router = express.Router();

const categories = require('../models/categories/categories.collection.js');

router.post('/categories', create);
router.get('/categories', read);
router.get('/categories/:id', readOne);
router.put('/categories/:id', update);
router.delete('/categories/:id', destroy);

async function create(req, res) {
  let newRecord = await categories.create(req.body);
  res.status(201).json(newRecord);
}

async function read(req, res) {
  let results = await categories.read();
  let output = { count: results.length, results: results };
  res.status(200).json(output);
}

async function readOne(req, res, next) {
  let results = await categories.read(req.params.id);
  res.status(200).json(results);
}

async function update(req, res, next) {
  let idToUpdate = await categories.update(req.params.id, req.body); 
  res.status(201).json(idToUpdate);
}

async function destroy(req, res) {
  let idToDelete = await categories.destroy(req.params.id);
  res.status(204).json(idToDelete);
}

module.exports = router;
