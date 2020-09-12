'use strict';

const schema = require('./products.schema.js');

class ProductCollection {

  create(newRecord) {
    let record = new schema(newRecord);
    return record.save();
  }

  read(id) {
    if (!id) {
      return schema.find({});
    } else {
      return schema.findById(id);
    }
  }

  update(id, obj) {
    
  }

  destroy() {

  }

}

module.exports = new ProductCollection();
