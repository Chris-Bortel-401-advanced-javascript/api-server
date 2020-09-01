'use strict';

// Execute a console.log() containing the request path, method, and the requestTime property of the request object
// Import this into your server and set it up to run at the application level for all routes

module.exports = (req, res, next) => {
  console.log('PATH:', req.path);
  next();
}
