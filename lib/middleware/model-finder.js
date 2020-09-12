'use strict';

// TODO: make this dynamic
const productsModel = require('../models/products/products-model.js');
const categoriesModel = require('../models/categories/categories-model.js');
function modelFinder(req, res, next) {
  const modelName = req.params.model;
  if (modelName === 'products') {
    req.model = productsModel;
  } else if (modelName === 'categories') {
    req.model = categoriesModel;
  }
  next();
}

module.exports = modelFinder;