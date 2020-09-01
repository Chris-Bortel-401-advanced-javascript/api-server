'use strict';


// timestamp.js
// Put the current timestamp (formatted like a proper date) on the request object in a property called requestTime
// Import this into your server and set it up to run at the application level for all routes
// function timeStamp(req, res, next)

module.exports = (req, res, next) => {
  req.timeStamp = Date.now();
  next();
};
