'use strict';

const mongoose = require('mongoose');

const Model = require('../mongo.js');

const products = mongoose.Schema ({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Number, required: true },
});

const productsSchema = mongoose.model('products', products);

module.exports = new Model(productsSchema);