'use strict';

// TODO: make this dynamic
const productsModel = require('../models/products/products-model.js');
const categoriesModel = require('../models/categories/categories-model.js');
function modelFinder(req, res, next) {
  
  switch(req.params.model) {
  case 'products':
    req.model = productsModel;
    next();
    break;
  
  case 'categories':
    req.model = categoriesModel;
    next();
    break;
    
  default:
    next('not a valid route');
  }
  return; 
}
module.exports = modelFinder;
