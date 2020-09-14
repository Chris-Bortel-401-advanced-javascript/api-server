'use strict';

const express = require('express');

const router = express.Router();

// TODO: This may also be going to the middleware 
const modelFinder = require('../middleware/model-finder.js');
router.param('model', modelFinder);

router.post('/:model', create);
router.get('/:model', read);
router.get('/:model/:id', readOne);
router.put('/:model/:id', update);
router.delete('/:model/:id', destroy);


async function create(req, res) {
  let newRecord = await req.model.create(req.body);
  res.status(201).json(newRecord);
}

async function read(req, res) {
  let results = await req.model.read();
  let output = { count: results.length, results: results };
  res.status(200).json(output);
}

async function readOne(req, res) {
  let results = await req.model.read(req.params.id);
  res.status(200).json(results);
}

async function update(req, res) {
  let idToUpdate = await req.model.update(req.params.id, req.body);
  res.status(201).json(idToUpdate);
}

async function destroy(req, res) {
  let idToDelete = await req.model.destroy(req.params.id);
  res.status(204).json(idToDelete);
}

module.exports = router;
