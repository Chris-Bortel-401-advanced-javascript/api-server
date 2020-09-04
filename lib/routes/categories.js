'use strict';

const express = require('express');

const router = express.Router();

const apiDB = require('./models/mock-db.js');

router.post('/categories', postCat);
router.get('/categories', getCat);
router.get('/categories/:id', getOneCat);
router.put('/categories/:id', putCat);
router.delete('/categories/:id', destroyCat);

// Categories
function postCat(req, res) {
  req.body.id = Math.floor(Math.random() * Math.floor(2000));
  apiDB.categories.results[req.body.id] = req.body;
  apiDB.categories.count = apiDB.categories.count + 1;
  res.status(201).send(req.body);
}

function getCat(req, res) {
  let count = apiDB.categories.count;
  let results = apiDB.categories.results;
  res.json({categories: { count, results }});
}

function getOneCat(req, res) {
  let id = req.params.id;
  console.log(id);
  let record = apiDB.categories.results[id];
  res.status(200).send(record);
}

function putCat(req, res) {
  let idToUpdate = req.params.id;
  if(apiDB.categories.results[idToUpdate]){
    Object.keys(req.body).map((record) => {
      console.log('record+++++++++++++++', record);
      apiDB.categories.results[idToUpdate][record] = req.body[record];
    });
  }
  res.status(201).json(apiDB.categories.results[idToUpdate]);
}

function destroyCat (req, res) {
  let idToDelete = req.params.id;
  if(apiDB.categories.results[idToDelete]){
    delete apiDB.categories.results[idToDelete];
  }
  res.status(204).json(apiDB.categories.results[idToDelete]);
}

module.exports = router;
