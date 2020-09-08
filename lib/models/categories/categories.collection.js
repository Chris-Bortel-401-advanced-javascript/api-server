'use strict';

const schema = require('./categories.schema.js');

class CategoriesCollection {
    
  create(newEntry) {
    let entry =new schema(newEntry);
    return entry.save();
  }

  read(id) {
    if (!id) {
      return schema.find({});
    } else {
      return schema.findById(id);
    }
  }

  update(id, newRecord) {

  }

  delete(id) {

  }

}


// says that whenever you require, make a new collection
module.exports = new CategoriesCollection();