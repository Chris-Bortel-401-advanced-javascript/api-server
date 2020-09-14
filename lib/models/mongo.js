'use strict';

// const schema = require('./products.schema.js');

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  create(obj) {
    let record = new this.schema(obj);
    return record.save();
  }

  read(id) {
    if (!id) {
      return this.schema.find({});
    } else {
      return this.schema.findById(id);
    }
  }

  update(id, obj) {
    return this.schema.findByIdAndUpdate({'_id': id}, {...obj});
  }

  destroy(id) {
    return this.schema.findByIdAndRemove(id);
  }

}

module.exports = Model;
