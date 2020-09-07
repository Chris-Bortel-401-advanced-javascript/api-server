'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
let server = require('./lib/server.js');

const MONGODB_URI = 'mongodb://localhost:27017/class-08';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions);
server.start(process.env.PORT);
