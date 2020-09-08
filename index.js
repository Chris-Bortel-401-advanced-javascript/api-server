'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
let server = require('./lib/server.js');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

server.start(process.env.PORT);
