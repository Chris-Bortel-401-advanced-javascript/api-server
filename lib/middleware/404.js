'use strict';

module.exports = (req, res, next) => {
  let output = {
    error: "Route Not found"
  };

  res.status(404).json(output);
};
