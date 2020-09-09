'use strict';

const express = require('express');

const router = express.Router();

const categories = require('../models/categories/categories.collection.js');

router.post('/categories', create);
router.get('/categories', read);
// router.get('/categories/:id', readOne);
// router.put('/categories/:id', put);
router.delete('/categories/:id', destroy);

// Categories
async function create(req, res) {
  let entry = await categories.create(req.body);
  console.log('entry++++++++++++++', entry);
  res.status(201).json(entry);
  // req.body.id = Math.floor(Math.random() * Math.floor(2000));
  // apiDB.categories.results[req.body.id] = req.body;
  // apiDB.categories.count = apiDB.categories.count + 1;
  // res.status(201).send(req.body);
}

async function read(req, res) {
  let results = await categories.read();
  
  let output = {
    count: results.length,
    results: results,
  };

  res.status(200).json(output);
  // let count = apiDB.categories.count;
  // let results = apiDB.categories.results;
  // res.json({categories: { count, results }});
}

// function getOne(req, res) {
//   let id = req.params.id;
//   console.log(id);
//   let record = apiDB.categories.results[id];
//   res.status(200).send(record);
// }

// function put(req, res) {
//   let idToUpdate = req.params.id;
//   if(apiDB.categories.results[idToUpdate]){
//     Object.keys(req.body).map((record) => {
//       console.log('record+++++++++++++++', record);
//       apiDB.categories.results[idToUpdate][record] = req.body[record];
//     });
//   }
//   res.status(201).json(apiDB.categories.results[idToUpdate]);
// }


async function destroy(req, res) {
  let idToDelete = await categories.destroy(req.params.id);
  res.status(204).json(idToDelete);
}
// function destroy (req, res) {
//   let idToDelete = req.params.id;
//   if(apiDB.categories.results[idToDelete]){
//     delete apiDB.categories.results[idToDelete];
//   }
//   res.status(204).json(apiDB.categories.results[idToDelete]);
// }

module.exports = router;
