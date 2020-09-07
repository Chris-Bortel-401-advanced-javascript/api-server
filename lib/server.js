'use express';

const express = require('express');
const app = express();
const apiDB = require('./models/mock-db.js');

const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');
const loggerHandler = require('./middleware/logger.js');
const timestampHandle = require('./middleware/timestamp.js');

const categoriesRouter = require('./routes/categories.js');
const productsRouter = require('./routes/products.js');

app.use(express.json());

app.use(timestampHandle);
app.use(loggerHandler);
app.use(express.urlencoded({extended:true}));

app.use(categoriesRouter);
app.use(productsRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
  app.listen(port, () => console.log('running on', port));
}

module.exports = {
  start: start,
  server: app,
};
